import { dbConfig } from '@config/constants';
import { pgSchema, serial, varchar } from 'drizzle-orm/pg-core';

export const employee = pgSchema(dbConfig.name).table('employee', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  userName: varchar('user_name', { length: 256 }).notNull()
});
