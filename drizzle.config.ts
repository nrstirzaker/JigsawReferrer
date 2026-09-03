import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    dialect: 'postgresql',
    schema: ['./src/schema/auth-schema.ts','./src/schema/registration-schema.ts'],
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    migrations: {
        table: 'journal',
    },
})

