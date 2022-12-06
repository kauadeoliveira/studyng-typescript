const arrayTeste = [9, 2, 3, 4, 5]

function myFilter<T>(array: T[], callback: (value: T) => boolean) : T[] {
    const myArray: T[] = [];

    array.reduce((accumulator, currentValue): any => callback(currentValue) ? myArray.push(currentValue) : false, 0)

    return myArray
}

function myMap<T>(array: T[], callback: (value: T) => any): T[] {
    const myArray: T[] = []
    array.reduce((accumulator, currentValue): any => myArray.push(callback(currentValue)), 0)

    return myArray
}

function myForEach<T>(array: T[], callback: (value: T) => void): void {
    array.reduce((accumulator, currentValue): any => callback(currentValue), 0)
}
