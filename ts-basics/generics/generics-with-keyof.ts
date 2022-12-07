const user = {
    id: 3,
    nick: 'drako'
}

function getProperty<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

console.log(getProperty(user, 'id'))