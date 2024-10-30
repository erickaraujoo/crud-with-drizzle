import { datetime, int, mysqlSchema, varchar } from 'drizzle-orm/mysql-core';
import { dbConfig } from '@main/config/constants';
import { user } from './User';

export const userApp = mysqlSchema(dbConfig.name).table('user_app', {
  clientId: varchar('client_id', { length: 256 }).notNull(),
  clientSecret: varchar('client_secret', { length: 256 }).notNull(),
  createdAt: datetime('created_at', { mode: 'date' }).notNull(),
  createdBy: varchar('created_by', { length: 256 }).notNull(),
  finishedAt: datetime('finished_at', { mode: 'date' }),
  finishedBy: varchar('finished_by', { length: 256 }),
  id: int('id').primaryKey(),
  updatedAt: datetime('updated_at', { mode: 'date' }),
  updatedBy: varchar('updated_by', { length: 256 }),
  userId: int('user_id')
    .notNull()
    .references(() => user.id)
});
