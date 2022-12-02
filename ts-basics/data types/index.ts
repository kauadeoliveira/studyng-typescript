// string
const exampleStr: string = 'Hello';

// number
const exampleNum: number = 10;

// array
const exampleArrayStr: string[] = ['A', 'E', 'I', 'O', 'U'];
const exampleArrayNum: number[] = [10, 20, 30, 40, 50];

// tuple
const exampleTuple1: [number, string, string] = [10, 'Neymar Jr', 'Brasil'];
const exampleTuple2: [number, string, string][] = [[10, 'Neymar Jr', 'Brasil'], [10, 'Messi', 'Argentina'], [7, 'CR7', 'Portugal']];
const exampleTuple3: [string, boolean] = ['Neymar Jr', true]

// enum
enum Example {
    const1 = 10,
    const2 = 'Hello',
    const3 = 20
}

// union
const unionExample = (param: string | number | boolean): string | number | boolean => {
    return param
}

// any
const anyExample = (param: any): any => {
    return param
}

// void
const voidExample = (param: string): void => {
    console.log(param)
}

// unknow
const unknowExample = (param: unknown): any => {
    typeof param === 'function' ? param() : 'this is not function'
}