import { DATABASE_URL } from './config/env_vars.js'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    schema: './src/schema.js', // schema file
    out: './drizzle',          // migrations folder
    dialect: 'postgresql',
    dbCredentials: {
        url: DATABASE_URL,
    }
})
