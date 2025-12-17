import { defineConfig } from "drizzle-kit";
import '@dotenvx/dotenvx/config'
export default defineConfig({
    dialect: "postgresql",
    schema: "./schema/auth-schema.ts",
    out: "./drizzle",
    dbCredentials: {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        ssl: true, // can be boolean | "require" | "allow" | "prefer" | "verify-full" | options from node:tls
    }
});