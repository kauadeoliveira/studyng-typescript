abstract class MyClass {
    abstract getName():string;

    printName(){
        console.log('Hello', this.getName())
    }
}

class MyDerived extends MyClass{
    getName(): string {
        return 'Kauã'
    }
}


const exemplo = new MyDerived()