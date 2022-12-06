
// Generic function
const example1 = <T> (param: T): void => {
    console.log(param)
}

// Multiple Type Variables
const example2 = <T, U> (a: T, b: U): void => {
    console.log(a)
    console.log(b)
}

// Interface with Generic Type
interface example3 <T> {
    value: T
}