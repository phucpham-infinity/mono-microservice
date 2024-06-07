import { serial, text, varchar, timestamp, pgTable, pgEnum } from 'drizzle-orm/pg-core';

export const gender = pgEnum('gender', ['male', 'female', 'other']);

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  userName: text('user_name'),
  email: text('email').unique().notNull(),
  gender: gender('gender').default('other'),
  phone: varchar('phone', { length: 256 }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
});

export type User = typeof users.$inferSelect; // return type when queried
export type UserGender = typeof gender.enumValues; // return type when queried
