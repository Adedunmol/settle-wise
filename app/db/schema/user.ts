import { relations } from 'drizzle-orm'
import { pgTable, serial, varchar, boolean, timestamp, index } from 'drizzle-orm/pg-core'

const user = pgTable('users', {
    id: serial('id').primaryKey(),
    fullName: varchar('full_name', { length: 255 }).notNull(),
    username: varchar('username', { length: 255 }).notNull(),
    phone: varchar('contact_phone', { length: 255 }).notNull().unique(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    emailVerified: boolean('email_verified').notNull().default(false),
    confirmationCode: varchar('confirmation_code', { length: 255 }),
    password: varchar('password', { length: 255 }).notNull(),
    createdAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { mode: 'string' }).notNull().defaultNow()
}, (table) => ({
    nameIndex: index().on(table.username)
}))

export default user