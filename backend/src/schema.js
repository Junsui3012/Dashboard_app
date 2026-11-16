import { pgTable, varchar, integer, date, numeric, timestamp, uuid, text,  } from "drizzle-orm/pg-core"

export const orgs = pgTable("organizations", {
    id: uuid("id").defaultRandom().primaryKey(),
})
