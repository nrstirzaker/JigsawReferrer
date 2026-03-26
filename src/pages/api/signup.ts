export const prerender = false // Not needed in 'server' mode
import type { APIRoute } from 'astro'
import { authClient } from '../../lib/auth-client' //import the auth client
import { auth } from '@/lib/auth.ts'

export const POST: APIRoute = async ({ request }) => {
    const formData = await request.formData()
    const nameValue = formData.get('firstName') + ' ' + formData.get('surname')
    const emailValue: string = formData.get('email') as string
    const passwordValue = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword')

    console.log('full name', nameValue)

    const response = await auth.api.signUpEmail({
        returnHeaders: true,
        body: {
            email: emailValue,
            password: passwordValue,
            name: nameValue,
        },

        asResponse: true,
    })

    return new Response(
        JSON.stringify({
            message: 'Success!',
        }),
        { status: 200 }
    )
}
