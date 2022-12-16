class Person {
    readonly namePerson: string = 'Kauã';
    readonly agePerson: number = 19;

    constructor(newName: string, newAge: number) {
        this.namePerson = newName;
        this.agePerson = newAge;
    }

    hello() {
        const nickname = this.namePerson = 'Kau'
        console.log('Hello', nickname)
    }
}


interface StringArray{
    [index: number]: string
}

const teste1: StringArray = {
    2: 'abcd'
}