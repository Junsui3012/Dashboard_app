import app from "./app.js"
import { PORT, HOST } from "./config/env_vars.js"
import { cout } from "./utils/logger.js"

app.listen(PORT, HOST, () => {
    cout(`Server listening at http://${HOST}:${PORT}`)    
})
