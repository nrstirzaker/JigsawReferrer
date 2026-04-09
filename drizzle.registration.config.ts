import { defineConfig } from 'drizzle-kit'
import '@dotenvx/dotenvx/config'

export default defineConfig({
    out: './drizzle',
    dialect: 'postgresql',
    schema: './src/schema/registration-schema.ts',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    migrations: {
        schema: 'public',
        table: '__drizzle_migrations__',
        prefix: 'timestamp',
    },
})
