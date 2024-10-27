import { Pool } from 'pg';
import { dbConfig } from '@main/config/constants';
import { drizzle } from 'drizzle-orm/node-postgres';

const pool = new Pool({
  database: dbConfig.name,
  host: dbConfig.host,
  password: dbConfig.password,
  ssl: true,
  user: dbConfig.userName
});

const db = drizzle(pool);

export { db };
