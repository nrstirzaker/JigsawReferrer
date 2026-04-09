import { auth } from '@/lib/auth'
import type { MiddlewareHandler } from 'astro'

export const onRequest: MiddlewareHandler = async (ctx, next) => {
    console.log('middleware is executed')

    // Convert headers to plain object so Better Auth can read cookies
    const headersObj: Record<string, string> = {}
    for (const [key, value] of ctx.request.headers.entries()) {
        headersObj[key] = value
    }

    const session = await auth.api.getSession({ headers: headersObj })

    console.log('SESSION:', session)

    ctx.locals.user = session?.user ?? null

    return next()
}
