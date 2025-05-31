import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import dayjs from "dayjs";
import e, { request } from "express";
import { connection } from "./connection.js";
import { User, AuthModel } from "./model.js";
import cors from 'cors'

const app = e();
const port = 5700;
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
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(e.json());
app.use(e.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Example at listening port: ${port}`);
});

// Запросы
app.get("/users/", async (request, response) => {
  try {
    const [results] = await connection.query("SELECT * FROM user");
    response.send(results);
  } catch (err) {
    console.log(err);
  }
});

app.get("/users/me/", async (request, response) => {
  try {
    const user = await chechAuth(request);
    response.send(user);
  } catch (err) {
    response.status(400).json({ error: err.message });
  }
});

app.post("/users/", async (request, response) => {
  try {
    const { name, mobilePhone, email, password } = User.parse(request.body);
    const hash = await hashPassword(password);
    const createUser = await connection.execute(
      `INSERT INTO user (name, mobilePhone, email, password) VALUES (?, ?, ?, ?)`,
      [name, mobilePhone, email, hash] // [request.body.name, request.body.mobilePhone, request.body.email, request.body.password]
    );
    await connection.commit();

    response.send(request.body);
  } catch (err) {
    response.send(err.message);
    console.log(err.message);
  }
});

app.post("/users/token/", async (request, response) => {
  try {
    const data = AuthModel.parse(request.body);
    const [results] = await connection.query(
      `SELECT * FROM user WHERE email = ?`,
      [data.email]
    );
    if (results.length > 0) {
      const user = results[0];
      if (await checkPassword(data.password, user.password)) {
        // Успешная авторизация
        const token = jwt.sign(
          {
            /*Тот кто подписывает токен ->*/ sub: user.id,
            /*Время истекания токена*/ exp: dayjs().add(7, "day").unix(),
          },
          privateKey
        );
        response.send({ token, user: request.body });
        console.log("Авторизация успешна");
      } else {
        throw new Error("Логин и пароль не верные");
      }
    } else {
      throw new Error("Пользователь не найден");
    }
  } catch (err) {
    console.log(err.message);
  }
});
