import verificationEmail from '../components/emails/VerifyEmailComponent.vue'
import forgottenPasswordResetEmail from '../components/emails/ForgottenPasswordResetEmailComponent.vue'
import { render } from '@vue-email/render'

export const verificationEmailRenderer = async (
    user: any,
    resetUrl: string
) => {
    console.log('user.name: ' + user.name)
    console.log('user.email: ' + user.email)
    console.log('resetUrl: ' + resetUrl)
    const html = await render(
        verificationEmail,
        {
            name: user.name,
            email: user.email,
            resetUrl: resetUrl,
        },
        {
            pretty: true,
        }
    )

    return html
}

export const forgottenPasswordEmailRenderer = async (
    user: any,
    resetUrl: string
) => {
    console.log('user.name: ' + user.name)
    console.log('user.email: ' + user.email)
    console.log('resetUrl: ' + resetUrl)
    const html = await render(
        forgottenPasswordResetEmail,
        {
            name: user.name,
            email: user.email,
            resetUrl: resetUrl,
        },
        {
            pretty: true,
        }
    )

    return html
}
