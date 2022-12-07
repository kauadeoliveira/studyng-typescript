const user = {
    id: 3,
    nick: 'drako'
}

function getProperty<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

// console.log(getProperty(user, 'id'))




function pluck<DataType extends object, KeyType extends keyof DataType>(items: DataType[], key: KeyType){
    return items.map(item => item[key])
}

const dogs = [
    {name: 'katito', age: 10},
    {name: 'luna', age: 3}
]

console.log(pluck(dogs, 'name'))