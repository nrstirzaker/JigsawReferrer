import type { APIRoute } from "astro";
import {db} from '@/db/db.ts'
import {clients} from '@/schema/registration-schema.ts'
import { eq } from 'drizzle-orm';
import {v4 as uuidv4, parse as uuidParse} from "uuid";

export const GET: APIRoute = (async ({ params, request }) => {
    console.log("Params: ", params);
    console.log("ReferrerId: ", params?.id);
    const referrerIdAsString = params?.id || ""
    const clientsOfReferrer = await db.select().from(clients).where(

                eq(clients.referrerId, referrerIdAsString)



    )
        // .select({
        //     id: clients.clientId,
        //     referrerId: clients.referrerId,
        //     fullName: clients.firstName,
        //     phoneNumber: clients.phoneNumber
        //
        // })
        // .from(clients)
        // .where(clients.referrerId == referrerIdAsString)
    const data = clientsOfReferrer ? JSON.stringify(clientsOfReferrer) : {}
    return new Response(
        JSON.stringify(clientsOfReferrer),{
            status: 200,
            headers: {
                'content-type': 'application/json'
            }
        }
    )

}) satisfies APIRoute;