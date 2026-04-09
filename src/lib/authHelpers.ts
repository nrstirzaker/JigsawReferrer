import { auth } from './auth.ts'

export function headersFromRequest(request: Request): Record<string, string> {
    const headersObj: Record<string, string> = {}
    for (const [key, value] of request.headers.entries()) {
        headersObj[key] = value
    }
    return headersObj
}

/**
 * Sign out user and optionally redirect
 */
export async function signOutAndRedirect(
    request: Request,
    redirectUrl = '/signin'
) {
    const headers = headersFromRequest(request)

    await auth.api.signOut({ headers })

    return redirectUrl
}
