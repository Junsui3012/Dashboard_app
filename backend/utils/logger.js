
export const cout = (message, ...moreMessages) => {
    console.log(message, ...moreMessages)
}

export const cerr = (message, ...moreMessages) => {
    console.error(message, ...moreMessages)
}

export const errObj = (message) => {
    return {status: "error", message}
}
