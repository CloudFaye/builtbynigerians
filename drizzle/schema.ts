import { sqliteTable, AnySQLiteColumn, integer, text, sqliteTableCreator } from "drizzle-orm/sqlite-core"
  import { Table, sql } from "drizzle-orm"

export const directory = sqliteTable("directory", {
	id: integer().primaryKey().notNull(),
	name: text().notNull(),
	image: text().notNull(),
	created: text().notNull(),
	details: text().notNull(),
	category: text().notNull(),
});

