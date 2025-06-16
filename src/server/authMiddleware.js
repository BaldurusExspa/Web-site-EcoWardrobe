import jwt from "jsonwebtoken";
import { connection } from "./connection.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Invalid authorization header' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, "How to get richable");
    
    const [user] = await connection.query(
      "SELECT * FROM users WHERE id = ?", 
      [decoded.sub]
    );

    if (!user.length) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = user[0];
    next();
  } catch (error) {
    console.error('Auth error:', error.message);
    res.status(401).json({ 
      error: 'Authentication failed',
      details: error.message 
    });
  }
};