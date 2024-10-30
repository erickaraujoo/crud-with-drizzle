import { dbConfig } from '@main/config/constants';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  database: dbConfig.name,
  host: dbConfig.host,
  password: dbConfig.password,
  user: dbConfig.userName
});

const db = drizzle(pool);

export { db };
