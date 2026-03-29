import { boolean, integer, pgTable, text, varchar } from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

// Referrers Table

export const referrers = pgTable(
    'referrers',
    {
        referrerId: integer('referrer_id')
            .primaryKey()
            .generatedAlwaysAsIdentity(),
        organisationId: integer('organisation_id').references(
            () => organisations.organisationId,
            {
                onDelete: 'cascade',
                onUpdate: 'cascade',
            }
        ),
        title: varchar('title', { length: 6 }),
        firstName: varchar('first_name', { length: 255 }).notNull(),
        lastName: varchar('last_name', { length: 255 }).notNull(),
        email: varchar('email', { length: 255 }).unique(),
        phoneNumber: varchar('phone_number', { length: 20 }),
    },
    table => [
        sql`CONSTRAINT title_valid CHECK (${table.title} IN ('mr', 'mrs', 'miss', 'ms'))`,
    ]
)

// Organisations Table

export const organisations = pgTable('organisations', {
    organisationId: integer('organisation_id')
        .primaryKey()
        .generatedAlwaysAsIdentity(),
    nameOfOrganisation: varchar('name_of_organisation', {
        length: 255,
    }),
    typeOfOrganisation: varchar('type_of_organisation', {
        length: 255,
    }),
    address: text('address'),
})

// Parent Carers Table

export const parentCarers = pgTable(
    'parent_carers',
    {
        parentCarerId: integer('parent_carer_id')
            .primaryKey()
            .generatedAlwaysAsIdentity(),
        referrerId: integer('referrer_id').references(
            () => referrers.referrerId,
            {
                onDelete: 'cascade',
                onUpdate: 'cascade',
            }
        ),
        jigsawHubLocationId: integer('jigsaw_hub_location_id').references(
            () => jigsawHubLocations.jigsawHubLocationId,
            {
                onDelete: 'cascade',
                onUpdate: 'cascade',
            }
        ),
        referralNumber: integer('referral_number'),
        firstName: varchar('first_name', { length: 255 }),
        lastName: varchar('last_name', { length: 255 }),
        address: text('address'),
        email: varchar('email', { length: 255 }).unique(),
        phoneNumber: varchar('phone_number', { length: 20 }),
        isPregnant: boolean('is_pregnant'),
        reasonForReferral: text('reason_for_referral'),
        gender: varchar('gender', { length: 20 }),
    },
    table => [
        sql`CONSTRAINT gender_valid CHECK (${table.gender} IN ('male', 'female', 'prefer_not_to_say'))`,
    ]
)

// Children Table

export const children = pgTable(
    'children',
    {
        childrenId: integer('children_id')
            .primaryKey()
            .generatedAlwaysAsIdentity(),

        parentCarerId: integer('parent_carer_id').references(
            () => parentCarers.parentCarerId,
            {
                onDelete: 'cascade',
                onUpdate: 'cascade',
            }
        ),
        firstName: varchar('first_name', { length: 255 }),
        lastName: varchar('last_name', { length: 255 }),
        age: integer('age'),
        gender: varchar('gender', { length: 20 }),
    },
    table => [
        sql`CONSTRAINT gender_valid CHECK (${table.gender} IN ('male', 'female', 'prefer_not_to_say'))`,
    ]
)

// Jigsaw Hub Locations Table

export const jigsawHubLocations = pgTable('jigsaw_hub_locations', {
    jigsawHubLocationId: integer('jigsaw_hub_location_id')
        .primaryKey()
        .generatedAlwaysAsIdentity(),
    jigsawHublocation: varchar('jigsaw_hub_location', { length: 255 }),
})
