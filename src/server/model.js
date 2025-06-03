import { z } from "zod/v4";
import { connection } from "./connection.js";

export const User = z.object({
  name: z.string(),
  mobilePhone: z.coerce.number(),
  email: z.email(),
  password: z.string().min(3),
});

export class Authorization {
  static async validateUser(email, password) {
    try {
      const [results] = await connection.query(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email, password]
      );
      return results[0] || null;
    } catch (err) {
      throw err.message;
    }
  }
}

export const AuthModel = z.object({
  email: z.email(),
  password: z.string().min(3),
});
