import { int, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Users table for authentication
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Gallery table for storing uploaded images and media
 */
export const gallery = mysqlTable("gallery", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  fileUrl: text("fileUrl").notNull(),
  fileKey: text("fileKey").notNull(),
  mimeType: varchar("mimeType", { length: 100 }),
  category: varchar("category", { length: 100 }).default("general"),
  uploadedBy: int("uploadedBy").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Gallery = typeof gallery.$inferSelect;
export type InsertGallery = typeof gallery.$inferInsert;
