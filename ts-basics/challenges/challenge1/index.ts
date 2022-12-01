import houses from "./houses.json"

interface House {
    name: string;
    planets: string | string[];
    cool: boolean;
}

interface HouseWithID {
    id: number
    name: string;
    planets: string | string[];
}


function findHouses(input: string | House[], filter?: (house: House) => boolean): HouseWithID[] {
    const houses: House[] = typeof input === 'string' ? JSON.parse(input) : input;

    return(filter ? houses.filter(filter) : houses).map(house => ({
        id: houses.indexOf(house),
        ...house
    }))

    // return []
}

console.log(findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides"))