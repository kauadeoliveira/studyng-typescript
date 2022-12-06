const arrayTeste = [1, 2, 3, 4, 5]

function myFilter<T>(array: T[], callback: (value: T) => boolean) : T[] {
    const myArray: T[] = [];

    array.reduce((accumulator: T, currentValue: T): any => callback(currentValue) ? myArray.push(currentValue) : false)

    return myArray
}

function myMap<T>(array: T[], callback: (value: T) => any): T[] {
    const myArray: T[] = []
    for(let i: number = 0; array.length > i; i++){
        myArray.push(callback(array[i]))
    }
    return myArray
}


console.log(myMap(arrayTeste, (value) => value * 2))