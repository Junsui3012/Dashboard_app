
export const cout = (message, ...moreMessages) => {
    console.log(message, ...moreMessages)
}

export const cerr = (message, ...moreMessages) => {
    console.error(message, ...moreMessages)
}

export const errObj = (message) => {
    return {status: "error", message}
}

export const getErrorMessage = (err) => {
    if (err instanceof Error) return err.message
    if (typeof err === "object" && err !== null) {
        return JSON.stringify(err)
    }
    return String(err)
}
