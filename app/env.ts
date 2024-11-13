import { config } from 'dotenv'
import { expand } from 'dotenv-expand'

import { ZodError, z } from 'zod'

const stringBoolean = z.coerce.string().transform(val => {
    return val === 'true'
}).default('false')

const EnvSchema = z.object({
    NODE_ENV: z.string().default('development'),
    DB_HOST: z.string(),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string(),
    DB_PORT: z.string(),
    DATABASE_URL: z.string(),
    DB_MIGRATING: stringBoolean
})

export type EnvSchema = z.infer<typeof EnvSchema>

expand(config())

try {
    EnvSchema.parse(process.env)
} catch (error) {
    if (error instanceof ZodError) {
        // log the error
    }
}