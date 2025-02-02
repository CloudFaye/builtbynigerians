import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const directory = sqliteTable('directory', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  image: text('image').notNull(),
  created: text('created').notNull(),
  details: text('details').notNull(),
  category: text('category').notNull(),
  url: text('url').notNull()
});