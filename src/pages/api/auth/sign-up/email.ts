export const prerender = false // Not needed in 'server' mode
import type { APIRoute } from 'astro'
import type { APIContext } from 'astro'
import VerifyEmail from '../../../emails/verify-email.astro'
import { Resend } from 'resend'

const resend = new Resend(import.meta.env.EMAIL_API_TOKEN)

export const POST: APIRoute = async ({ request }) => {
    //const toEmail: string = request ?? ''
    console.log('email: ' + JSON.stringify(request))
    // await resend.emails.send({
    //     from: import.meta.env.EMAIL_FROM,
    //     to: toEmail,
    //     subject: 'Please Verify your email address',
    //     html: getEmailHTML(),
    // })

    return new Response(null, {
        status: 200,
    })
}

function getEmailHTML() {
    return '<p>Congrats on sending your <strong>template email</strong>!</p>'
}
