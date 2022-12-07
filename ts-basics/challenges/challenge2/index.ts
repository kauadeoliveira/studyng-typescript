const arrayTeste = [9, 2, 3, 4, 5]

function myFilter<T>(array: T[], callback: (value: T) => boolean) : T[] {
    return array.reduce((accumulator, currentValue): any => callback(currentValue) ? [...accumulator, currentValue] : accumulator, []);
}

function myMap<T, K>(array: T[], callback: (value: T) => K): K[] {
    return array.reduce((accumulator, currentValue) => [...accumulator, callback(currentValue)], [] as K[]);

}

function myForEach<T>(array: T[], callback: (value: T) => void): void {
    array.reduce((accumulator, currentValue): any => callback(currentValue), 0);
}


// console.log(myFilter(arrayTeste, (value) => value % 2 === 0))
// console.log(myMap(arrayTeste, (value) => value * 2))
console.log(myForEach(arrayTeste, (value) => console.log(value)))