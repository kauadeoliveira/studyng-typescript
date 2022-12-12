interface Dog {
    name: string;
    breed: string;
    age?: number;
    color: string;
}

// Partial
const katito: Partial<Dog> = {
    name: 'katito',
    color: 'caramelo' 
} 

// Required
const luna: Required<Dog> = {
    name: 'Luna',
    breed: 'Shitzu',
    age: 3,
    color: 'White'
}

// Readonly
const yummi: Readonly<Dog> = {
    name: 'Yummi',
    breed: 'Shitzu',
    color: 'White'
}

// Record
interface Person {
    name: string;
    age: number;
    country: string;
}

type PersonNames = "Kauã" | "Joice" | "Lorena"

const peoples: Record<PersonNames, Person> = {
    Joice: { name: "Joice Oliveira", age: 37, country: "Brasil" },
    Kauã: { name: "Kauã Oliveira", age: 19, country: "Brasil" },
    Lorena: { name: "Lorena Oliveira", age: 1, country: "Brasil" }
}

// Pick
interface Vehicle {
    type: string
    model: string
    rodas: number
    portas: number
    fullSpeed: number
}

type Moto = Pick<Vehicle, "type" | "model" | "rodas" | "fullSpeed">

const hornet600: Moto = {
    type: "Moto",
    model: "Hornet CB 600",
    rodas: 2,
    fullSpeed: 200
}

// Omit
type Barco = Omit<Vehicle, "rodas" | "portas">

const jetski: Barco = {
    type: "barco",
    model: "Jetski RXP Seadoo",
    fullSpeed: 112
}

// Exclude
type FinalDaCopa = 'Brasil' | 'França'

const campeao: Exclude<FinalDaCopa,'França'> = "Brasil"

// Extract
type myUnionType = "a" | "b" | "c" | "d" | "e"

const vogal: Extract<myUnionType, "a" | "e"> =  "e"

// NonNullable
type myType = string | number | boolean | null | undefined

type noNullsAndUndefined = NonNullable<myType>

const exampleNoNullable: noNullsAndUndefined = "no undefined and nulls types"

// Parameters

type exampleParameters = Parameters<(name: string, age: number) => void>


// Tipos de manipulação de string
type name = string

// Uppercase
const myName: Uppercase<name> = 'KAUÃ'

// Capitalize
const myName2: Capitalize<name> = 'Kauã'

// Uncapitalize
const myName3: Uncapitalize<name> = 'kauã'

// LowerCase
const myName4: Lowercase<name> = 'kauã'