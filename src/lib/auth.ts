import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import db from './db.js' // your drizzle instance
import { Resend } from 'resend'
import {
    verificationEmailRenderer,
    forgottenPasswordEmailRenderer,
} from './emailRenderers.ts'

import {
    user,
    session,
    account,
    verification,
} from '../../schema/auth-schema.js'

const resend = new Resend(import.meta.env.EMAIL_API_TOKEN)

export const auth = betterAuth({
    site: 'http://localhost:4321',
    database: drizzleAdapter(db, {
        provider: 'pg',
        schema: {
            user,
            session,
            account,
            verification,
        },
    }),
    emailVerification: {
        sendVerificationEmail: async ({ user, url }) => {
            const toEmail = user.email ?? ''
            const html = await verificationEmailRenderer(user, url)
            resend.emails.send({
                from: import.meta.env.EMAIL_FROM,
                to: toEmail,
                subject: 'Please Verify your email address',
                html: html,
            })
        },
        sendOnSignUp: true,
    },
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
        sendResetPassword: async ({ user, url }) => {
            const toEmail = user.email ?? ''
            const html = await forgottenPasswordEmailRenderer(user, url)
            resend.emails.send({
                from: import.meta.env.EMAIL_FROM,
                to: toEmail,
                subject: 'Reset your password',
                html: html,
            })
        },
    },
    cookie: {
        sessionToken: {
            name: 'better-auth.session',
        },
    },
    session: {
        expiresIn: 60 * 60 * 24 * 7, // 7 days
        updateAge: 60 * 60 * 24, // 1 day (every 1 day the session expiration is updated)
    },
    debug: true,
})
