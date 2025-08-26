// src/configs/schema.js
import { pgTable, serial, varchar, text,boolean } from 'drizzle-orm/pg-core';

export const USER_TABLE = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 50 }).notNull(),
  email: varchar("email", { length: 100 }).notNull(),
  password: text("password"),
  isMember: boolean("is_member").default(false).notNull(),
});