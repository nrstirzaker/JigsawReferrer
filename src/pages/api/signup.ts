export const prerender = false; // Not needed in 'server' mode
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();
    const fullName = data.get("fullName");
    const email = data.get("email");
    const password = data.get("password");
    const confirmPassword = data.get("confirmPassword");

    console.log("fullName", fullName);
    return new Response(
        JSON.stringify({
            message: "Success!"
        }),
        { status: 200 }
    );

}