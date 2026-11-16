import app from "./app.js"
import { PORT, HOST } from "./config/env_vars.js"
import { db } from "./src/db.js"
import { cerr, cout, getErrorMessage } from "./utils/logger.js"

const server = app.listen(PORT, HOST, () => {
    cout(`Server listening at http://${HOST}:${PORT}`)
})

// Handles graceful shutdown
let isShuttingDown = false
const gracefulShutdown = (reason, exitCode) => {
    if (isShuttingDown) return
    isShuttingDown = true

    cout(`Shutting down due to: ${reason}`)
    cout("Doing a graceful Shutdown...")

    const forceExitTimer = setTimeout(() => {
        cerr("Could not close the connection in time. Forceful shutdown activated.")
        process.exit(1)
    }, 10000).unref()

    const serverConnForceExit = setTimeout(() => {
        cerr("Forcefully terminating all connections")
        server.closeAllConnections()
    }, 5000).unref()

    server.close(async () => {
        cout("Successfully closed server!")
        try {
            await db.$client.end()
            cout("Successfully closed database!")
        }
        catch (err) {
            cerr(`Error closing database: ${err.message}`)
            exitCode = 1
        }
        finally {
            clearTimeout(forceExitTimer)
            clearTimeout(serverConnForceExit)
            cout(`Shutting down...`)
            process.exit(exitCode)
        }
    })

    server.closeIdleConnections()
}

process.on('SIGINT', () => { gracefulShutdown("SIGINT", 0) })
process.on('SIGTERM', () => { gracefulShutdown("SIGTERM", 0) })

process.on("uncaughtException", (err) => {
    cerr(`Unhandled Exception: ${getErrorMessage(err)}`)
    gracefulShutdown("uncaughtException", 1)
})
process.on("unhandledRejection", (err) => {
    cerr(`Unhandled Rejection: ${getErrorMessage(err)}`)
    gracefulShutdown("unhandledRejection", 1)
})
