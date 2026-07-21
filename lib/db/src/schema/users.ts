import {
  pgTable,
  uuid,
  text,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),

  fullName: text("full_name").notNull(),

  email: text("email").notNull().unique(),

  mobile: text("mobile").notNull().unique(),

  passwordHash: text("password_hash").notNull(),

  role: text("role").default("farmer").notNull(),

  isVerified: boolean("is_verified").default(false).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});