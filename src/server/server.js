import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import dayjs from "dayjs";
import express, { request, response } from "express";
import { connection } from "./connection.js";
import { User } from "./model.js";
import cors from "cors";
import { success } from "zod/v4";
import { id } from "zod/v4/locales";

const app = express();
const port = 3307;
const SALT_ROUNDS = 12;
const privateKey = "How to get richable";

async function chechAuth(request) {
  const params = request.headers["authorization"];
  if (params) {
    const decoded = jwt.verify(params, privateKey);
    const [results] = await connection.query(
      "SELECT * FROM user WHERE id = ?",
      [decoded.sub]
    );
    if (results.length < 0) {
      throw new Error("Некорректная авторизация");
    }
    return results[0];
  }
  throw new Error("Токен не указан!");
}

async function hashPassword(password) {
  return bcrypt.hash(password, SALT_ROUNDS);
}

async function checkPassword(password, hash) {
  return bcrypt.compare(password, hash);
}

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Example at listening port: ${port}`);
});

app.post("/authorization", async (request, response) => {
  try {
    const { email, password } = request.body;

    const [user] = await connection.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    const userData = user[0];

    if (!user) {
      return response.status(401).json({
        success: false,
        message: "Такой почты не зарегитсрированно",
      });
    }

    const isMatchPass = await checkPassword(password, userData.password);

    if (!isMatchPass) {
      return response.status(401).json({
        success: false,
        message: "Неверный пароль",
      });
    }

    const createToken = jwt.sign({ sub: user.id }, privateKey, {
      expiresIn: "1h",
    });

    response.status(200).json({
      success: true,
      createToken: createToken,
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err.message);
    response.status(500).json({
      success: false,
      message: "Ошибка сервера",
    });
  }
});

app.post("/registration", async (request, response) => {
  try {
    const { name, mobilePhone, email, password } = User.parse(request.body);
    const hash = await hashPassword(password);
    const createUser = await connection.execute(
      `INSERT INTO users (name, mobilePhone, email, password) VALUES (?, ?, ?, ?)`,
      [name, mobilePhone, email, hash] // [request.body.name, request.body.mobilePhone, request.body.email, request.body.password]
    );
    await connection.commit();

    response.status(200).json({
      success: true,
    });
  } catch (err) {
    console.error(err.message);
  }
});
