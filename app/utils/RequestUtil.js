export const Request = (url, method, body) => {
    let isOk = false
    return new Promise((resolve, reject) => {
        fetch(url).then((response) => {
            if (response.ok) {
                isOk = true
            } else {
                isOk = false
            }
            return response.json()
        }).then((responseData) => {
            if (isOk) {
                resolve(responseData)
            } else {
                reject(responseData)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}