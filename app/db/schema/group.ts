import { relations } from 'drizzle-orm'
import { pgTable, serial, varchar, boolean, timestamp, integer, pgEnum } from 'drizzle-orm/pg-core'
import user from './user'

export const typeEnum = pgEnum('type', ['trip', 'home', 'couple', 'other'])

const group = pgTable('groups', {
    id: serial('id').primaryKey(),
    createdBy: integer('created_by').notNull().references(() => user.id),
    name: varchar('name', { length: 255 }).notNull(),
    type: typeEnum().default('home'),
    createdAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { mode: 'string' }).notNull().defaultNow()
})

export default group