import verificationEmail from '../components/emails/Verification.vue'
import { render } from '@vue-email/render'

export const emailRenderer = async (user: any, url: string) => {
    console.log('user.name: ' + user.name)
    console.log('user.email: ' + user.email)
    console.log('url: ' + url)
    const html = await render(
        verificationEmail,
        {
            name: user.name,
            email: user.email,
            url: url,
        },
        {
            pretty: true,
        }
    )

    return html
}
