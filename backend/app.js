import express from "express"
import reqLogger from "./middlewares/request_logger.js"

const app = express()

app.use(reqLogger)
app.use(express.json())

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
})



export default app
