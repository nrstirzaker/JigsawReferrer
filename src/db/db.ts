// db.ts
import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import * as schema from '../schema/registration-schema.ts'
import '@dotenvx/dotenvx/config'

const sql = neon(process.env.DATABASE_URL!)

export const db = drizzle(sql, { schema })
