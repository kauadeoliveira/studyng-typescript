export function some(a: number, b: number): number {
    return a + b
}


export function greet(greeting: string, ...names: string[]): string {
    return `${greeting} ${names.join(', ')} !`
}

type MutationFunction = (value: number) => number;

export function arrayFunction(numbers: number[], callback: MutationFunction): number[] {
    return numbers.map(callback)
}

type CreateAdderFunction = (v: number) => number
export function createAdder(num: number): CreateAdderFunction {
    return (val: number) => num + val
}