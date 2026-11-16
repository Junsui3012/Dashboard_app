import { DATABASE_URL } from "../config/env_vars.js"
import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"
// import { sql } from "drizzle-orm"

if (!DATABASE_URL) throw new Error("Database URL not configured")

const pool = new Pool({
    connectionString: DATABASE_URL,
    connectionTimeoutMillis: 2000,
})
pool.on('error', (err) => {
    console.log(`${new Date().toISOString()} : DB request failed : ${err.message}`)
})

export const db = drizzle(pool)

// pool.query("SELECT 1;")
//     .then((res) => { console.log(`Database connected success: ${JSON.stringify(res.rows)}`) })
//     .catch((err) => { console.log(`Database connection failed: ${err.message}`) })
// db.execute(sql`SELECT 1`)
//     .then((res) => { console.log(`Database connected success: ${JSON.stringify(res.rows)}`) })
//     .catch((err) => { console.log(`Database connection failed: ${err.message}`) })
