interface Database {
    get(id: string): string;
    set(id: string, value: string): void;
}

class InMemoryDataBase implements Database{
    db: Record<string, string> = {}
    get(id: string): string {
        return this.db[id]
    }
    set(id: string, value: string): void{
        this.db[id] = value
    }
}

const mydB = new InMemoryDataBase();

mydB.set('kauã', 'oliveira')
console.log(mydB.get('kauã'))