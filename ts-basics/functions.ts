export function some(a: number, b: number): number {
    return a + b
}


export function greet(greeting: string, ...names: string[]): string {
    return `${greeting} ${names.join(', ')} !`
}