import { pgTable, serial, timestamp, integer } from 'drizzle-orm/pg-core'
import group from './group'

const groupMember = pgTable('group_members', {
    id: serial('id').primaryKey(),
    groupId: integer('group_id').references(() => group.id).notNull(),
    userId: integer('user_id').references(() => group.id).notNull(),
    joinedAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow(),
})

export default groupMember