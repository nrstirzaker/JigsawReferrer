import { defineConfig } from 'drizzle-kit'
import '@dotenvx/dotenvx/config'

//const credentialsConfig = getCredentials();
const url: { url: string } = getURL()

export default defineConfig({
    dialect: 'postgresql',
    schema: './src/schema/auth-schema.ts',
    dbCredentials: url,
    migrations: {
        table: 'journal',
    },
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
        'postgresql://' +
        username +
        '.' +
        host +
        ':' +
        password +
        '@' +
        awsSupabase +
        ':' +
        port +
        '/' +
        databaseName

    return { url: url }
}
