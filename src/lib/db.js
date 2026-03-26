import { drizzle } from 'drizzle-orm/postgres-js'
import 'dotenv/config'
// You can specify any property from the postgres-js connection options
const db = drizzle({
    connection: {
        url: process.env.DATABASE_URL,
        ssl: true,
    },
})

export default db
