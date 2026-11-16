import express from "express"
import reqLogger from "./middlewares/request_logger.js"
import { db } from "./src/db.js"
import { sql } from "drizzle-orm"

const app = express()

app.use(reqLogger)
app.use(express.json())

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
})

app.get("/db_health", async (req, res) => {
    const result = await db.execute(sql`SELECT 1;`)
    res.json(result)
})

export default app
