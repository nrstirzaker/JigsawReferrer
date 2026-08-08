// db.ts
import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'
import * as schema from '../schema/registration-schema.ts'

const sql = neon(import.meta.env.PUBLIC_DATABASE_URL)

export const db = drizzle(sql, { schema })
