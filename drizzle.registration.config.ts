import { defineConfig } from 'drizzle-kit'
import '@dotenvx/dotenvx/config'

export default defineConfig({
    out: './drizzle',
    dialect: 'postgresql',
    schema: './schema/registration-schema.ts',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
})
