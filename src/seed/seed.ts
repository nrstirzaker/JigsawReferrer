import { seed, reset } from 'drizzle-seed'
import * as schema from '../schema/registration-schema.ts'
import { db } from '../db/db.ts'

const seedDb = async () => {
    await reset(db, schema)
    await seed(db, schema, {
        count: 10,
        seed: 1234,
    }).refine(g => ({
        organisations: {
            count: 5,
            columns: {
                nameOfOrganisation: g.companyName(),
                typeOfOrganisation: g.valuesFromArray({
                    values: ['Church', 'Business', 'Charity'],
                }),
                address: g.streetAddress(),
            },
        },

        jigsawHubLocations: {
            count: 5,
            columns: {
                jigsawHubLocation: g.city(),
            },
        },

        referrers: {
            count: 20,
            columns: {
                title: g.valuesFromArray({
                    values: ['mr', 'mrs', 'miss', 'ms'],
                }),
                firstName: g.firstName(),
                lastName: g.lastName(),
                email: g.email(),
                phoneNumber: g.phoneNumber({ template: '+44 7#### #####' }),
            },
        },

        client: {
            count: 40,
            columns: {
                firstName: g.firstName(),
                lastName: g.lastName(),
                address: g.streetAddress(),
                email: g.email(),
                phoneNumber: g.phoneNumber({ template: '+44 7#### #####' }),
                isPregnant: g.boolean(),
                gender: g.valuesFromArray({
                    values: ['male', 'female', 'prefer_not_to_say'],
                }),
            },
        },

        children: {
            count: 80,
            columns: {
                firstName: g.firstName(),
                lastName: g.lastName(),
                age: g.int({ minValue: 1, maxValue: 17 }),
                gender: g.valuesFromArray({
                    values: ['male', 'female', 'prefer_not_to_say'],
                }),
            },
        },
    }))

    console.log('Database seeded successfully')
}

seedDb()
