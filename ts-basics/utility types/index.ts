interface Dog {
    name: string;
    breed: string;
    age?: number;
    color: string;
}

// Partial
const Katito: Partial<Dog> = {
    name: 'katito',
    color: 'caramelo' 
} 

// Required
const Luna: Required<Dog> = {
    name: 'Luna',
    breed: 'Shitzu',
    age: 3,
    color: 'White'
}

// Readonly
const Yummi: Readonly<Dog> = {
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

const Peoples: Record<PersonNames, Person> = {
    Joice: { name: "Joice Oliveira", age: 37, country: "Brasil" },
    Kauã: { name: "Kauã Oliveira", age: 19, country: "Brasil" },
    Lorena: { name: "Lorena Oliveira", age: 1, country: "Brasil" }
}

