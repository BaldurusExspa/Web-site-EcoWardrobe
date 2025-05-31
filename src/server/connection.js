import mysql from 'mysql2/promise';

// Here change all data to your db data
export const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ecowardrobe',
});
