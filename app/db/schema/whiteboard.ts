import { relations } from 'drizzle-orm'
import { pgTable, serial, timestamp, integer, text } from 'drizzle-orm/pg-core'
import group from './group'

const whiteBoard = pgTable('whiteboard', {
    id: serial('id').primaryKey(),
    groupId: integer('group_id').references(() => group.id).notNull(),
    info: text('info'),
    createdAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { mode: 'string' }).notNull().defaultNow()
})

export default whiteBoard