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