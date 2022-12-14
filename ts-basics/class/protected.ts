interface Classes {
    x: number
}

class Original {
    protected x = 20;
}

class Derivad extends Original {
    x = 10;
}

const exampleA = new Original();
// console.log(exampleA.x) - Error

const exampleB = new Derivad();
// console.log(exampleB.x) - 10