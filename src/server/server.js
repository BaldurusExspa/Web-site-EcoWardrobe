import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import dayjs from "dayjs";
import express, { request, response } from "express";
import { connection } from "./connection.js";
import { User, AuthModel } from "./model.js";
import cors from "cors";
import { json, success } from "zod/v4";
import { id } from "zod/v4/locales";
import path from "path";
import { fileURLToPath } from "url";
import { authMiddleware } from "./authMiddleware.js";

const app = express();
const port = 3307;
const SALT_ROUNDS = 12;
const privateKey = "How to get richable";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const imagesPath = path.join(__dirname, "public", "images");

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

app.use("/images", express.static(imagesPath));
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

// app.get("/me", authMiddleware, async (request, response) => {
//   try {
//     response.json({
//       success: true,
//       user: request.user,
//     });
//   } catch (error) {
//     console.error(error);
//     response.status(500).json({
//       success: false,
//       message: "Ошибка сервера",
//     });
//   }
// });

app.get("/products/:id", async (request, response) => {
  try {
    const productId = request.params.id;

    const [product] = await connection.query(
      "SELECT products.*, price_change.current_price FROM products JOIN (SELECT products_id, current_price, date_interaction FROM price_change WHERE (products_id, date_interaction) IN (SELECT products_id, MAX(date_interaction) FROM price_change GROUP BY products_id)) price_change ON products.id = price_change.products_id WHERE products.id = ? ORDER BY products.id",
      [productId]
    );

    response.status(200).json(product);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/catalog", async (request, response) => {
  try {
    const [products] = await connection.query(
      "SELECT products.id, products.image, products.name, products.compound, price_change.current_price FROM products JOIN (SELECT products_id, current_price, date_interaction FROM price_change WHERE (products_id, date_interaction) IN (SELECT products_id, MAX(date_interaction) FROM price_change GROUP BY products_id)) price_change ON products.id = price_change.products_id ORDER BY products.id;"
    );

    response.status(200).json(products);
  } catch (err) {
    console.error(err.message);
    response.status(500).json({
      success: false,
      message: "Ошибка запроса",
    });
  }
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

    const [user] = await connection.query(
      "SELECT * FROM users WHERE users.id = ?",
      [createUser.insertId]
    );
    const token = jwt.sign(
      {
        sub: createUser.insertId,
        email: email,
        exp: dayjs().add(7, "day").unix(),
      },
      privateKey
    );

    response.status(200).json({
      success: true,
      token: token,
      message: `Пользователь создан с данным токеном: ${token}`,
    });
  } catch (err) {
    console.error(err.message);
  }
});
