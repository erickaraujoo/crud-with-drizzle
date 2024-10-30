import { datetime, int, mysqlSchema, varchar } from 'drizzle-orm/mysql-core';
import { dbConfig } from '@main/config/constants';
import { user } from './User';

export const userAccessToken = mysqlSchema(dbConfig.name).table('user_access_token', {
  accessToken: varchar('access_token', { length: 256 }).notNull(),
  createdAt: datetime('created_at', { mode: 'date' }).notNull(),
  createdBy: varchar('created_by', { length: 256 }).notNull(),
  expiresIn: int('expires_in').notNull(),
  finishedAt: datetime('finished_at', { mode: 'date' }),
  finishedBy: varchar('finished_by', { length: 256 }),
  id: int('id').primaryKey(),
  refreshToken: varchar('refresh_token', { length: 256 }),
  scope: varchar('scope', { length: 256 }).notNull(),
  tokenType: varchar('token_type', { length: 256 }).notNull(),
  updatedAt: datetime('updated_at', { mode: 'date' }),
  updatedBy: varchar('updated_by', { length: 256 }),
  userId: int('user_id')
    .notNull()
    .references(() => user.id)
});
