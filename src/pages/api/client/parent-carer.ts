import type { APIRoute } from "astro";

export const GET = (({ params, request }) => {
    const clientId = Number(params.clientId);
    console.log("GET", clientId);
    return new Response(
        JSON.stringify({
            clientId: clientId,
            firstname:"nigel"
        }),
    );
}) satisfies APIRoute;