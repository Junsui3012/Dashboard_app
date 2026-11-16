import 'dotenv/config'

export const PORT = process.env.PORT

export const HOST = process.env.HOST

export const ENV_TYPE = process.env.ENV_TYPE?.trim()

/**
 * @type {String}
 */
export const DATABASE_URL = (ENV_TYPE === 'test') ?
    process.env.DATABASE_URL_TEST :
    process.env.DATABASE_URL

// /**
//  * @type {String}
//  */
// export const DATABASE_URL_POOLED = (ENV_TYPE === 'test') ?
//     process.env.DATABASE_URL_POOLED_TEST :
//     process.env.DATABASE_URL_POOLED
