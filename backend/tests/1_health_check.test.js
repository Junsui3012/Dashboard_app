import { after, describe, it } from "node:test"
import assert from "node:assert"
import supertest from "supertest"
import app from "../app.js"
import { db } from "../src/db.js"

const api = supertest(app)

describe("The server", () => {
    it("has working API calls", async (t) => {
        const response = await api.get("/")
            .expect(200)
        assert.match(response.text, /Hello World/)
    })

    it("has connected to the database", async (t) => {
        await api.get("/db_health")
            .expect(200)
            .expect('content-type', /application\/json/)
    })
})

after(async () => {
    await db.$client.end()
})
