import { dbConfig } from '@main/config/constants';
import { pgSchema, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const employee = pgSchema(dbConfig.name).table('employee', {
  createdAt: timestamp('created_at', { mode: 'date' }).notNull(),
  finishedAt: timestamp('finished_at', { mode: 'date' }),
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  password: varchar('password', { length: 256 }).notNull(),
  refreshToken: varchar('refresh_token', { length: 256 }),
  refreshTokenExpiresAt: timestamp('refresh_token_expires_at', { mode: 'date' }),
  updatedAt: timestamp('updated_at', { mode: 'date' }),
  userName: varchar('user_name', { length: 256 }).notNull()
});
