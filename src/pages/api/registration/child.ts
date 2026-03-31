export const prerender = false // Not needed in 'server' mode
import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.formData()
        const firstname = data.get('firstname')
        const lastname = data.get('lastname')
        const age = data.get('age')
        const gender = data.get('gender')

        console.log('Firstname: ', firstname)
        console.log('Lastname: ', lastname)
        console.log('Age: ', age)
        console.log('Gender: ', gender)

        return new Response(
            JSON.stringify({
                message: 'Success!',
            }),
            { status: 200 }
        )
    } catch (error) {
        console.log(error)
        return new Response(
            JSON.stringify({
                message: 'Error',
            }),
            { status: 500 }
        )
    }
}
