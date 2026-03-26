import { defineConfig } from 'drizzle-kit'
import '@dotenvx/dotenvx/config'

//const credentialsConfig = getCredentials();
const url: { url: string } = getURL()

export default defineConfig({
    dialect: 'postgresql',
    schema: './schema/auth-schema.ts',
    dbCredentials: url,
    out: './drizzle',
})

// function getCredentials(){
//
//     const host : string = process.env.DATABASE_HOST ? process.env.DATABASE_HOST : "";
//     const port : number = process.env.DATABASE_PORT ? Number(process.env.DATABASE_PORT) : 0;
//     const username : string = process.env.DATABASE_USERNAME ? process.env.DATABASE_USERNAME : "";
//     const password : string = process.env.DATABASE_PASSWORD ? process.env.DATABASE_PASSWORD : "";
//     const databaseName : string = process.env.DATABASE_NAME ? process.env.DATABASE_NAME : "";
//
//     const config= {
//         host: host,
//         port: port,
//         user: username,
//         password: password,
//         database: databaseName
//
//     }
//     console.log(config)
//     return config
// }

function getURL() {
    const host: string = process.env.DATABASE_HOST
        ? process.env.DATABASE_HOST
        : ''
    const port: number = process.env.DATABASE_PORT
        ? Number(process.env.DATABASE_PORT)
        : 0
    const username: string = process.env.DATABASE_USERNAME
        ? process.env.DATABASE_USERNAME
        : ''
    const password: string = process.env.DATABASE_PASSWORD
        ? process.env.DATABASE_PASSWORD
        : ''
    const databaseName: string = process.env.DATABASE_NAME
        ? process.env.DATABASE_NAME
        : ''
    const awsSupabase: string = process.env.DATABASE_AWS_SUPABASE
        ? process.env.DATABASE_AWS_SUPABASE
        : ''

    const url: string =
        'postgresql://neondb_owner:npg_yTlIZpwn2fX8@ep-gentle-wind-a9rp5yen-pooler.gwc.azure.neon.tech/neondb?sslmode=require&channel_binding=require'

    return { url: url }
}
