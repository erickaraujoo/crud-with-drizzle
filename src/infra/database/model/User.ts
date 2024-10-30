import { datetime, int, mysqlSchema, varchar } from 'drizzle-orm/mysql-core';
import { dbConfig } from '@main/config/constants';
import { sql } from 'drizzle-orm';

export const user = mysqlSchema(dbConfig.name).table('user', {
  createdAt: datetime('created_at')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  createdBy: varchar('created_by', { length: 256 }).notNull(),
  email: varchar('email', { length: 256 }).notNull(),
  finishedAt: datetime('finished_at', { mode: 'date' }),
  finishedBy: varchar('finished_by', { length: 256 }),
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 256 }).notNull(),
  updatedAt: datetime('updated_at', { mode: 'date' }),
  updatedBy: varchar('updated_by', { length: 256 })
});
