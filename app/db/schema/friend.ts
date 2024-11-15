import { pgTable, serial, timestamp, integer } from 'drizzle-orm/pg-core'
import user from './user'

const friend = pgTable('friends', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => user.id).notNull(),
    friendUserId: integer('friend_user_id').references(() => user.id).notNull(),
    createdAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { mode: 'string' }).notNull().defaultNow()
})

export default friend