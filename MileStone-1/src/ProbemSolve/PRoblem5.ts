//Create a generic interface called Repository that represents a generic data repository. It should have methods like getAll, getById, create, update, and delete. Define the types for the methods and create a class that implements this interface.

interface Repository<T> {
    getAll(): T[];
    getById(id: string): T | undefined;
    create(item: T): void;
    update(id: string, item: T): boolean;
    delete(id: string): boolean;
}


class ExampleRepository<T> implements Repository<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    getAll(): T[] {
        return this.items;
    }

    getById(id: string): T | undefined {
        return this.items.find((item: any) => item.id === id);
    }

    create(item: T): void {
        this.items.push(item);
    }

    update(id: string, item: T): boolean {
        const index = this.items.findIndex((existingItem: any) => existingItem.id === id);
        if (index !== -1) {
            this.items[index] = item;
            return true;
        }
        return false;
    }

    delete(id: string): boolean {
        const index = this.items.findIndex((item: any) => item.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }
}

interface ExampleItem {
    id: string;
    name: string;
}

const repository = new ExampleRepository<ExampleItem>();
repository.create({ id: '1', name: 'Item 1' });
repository.create({ id: '2', name: 'Item 2' });
console.log(repository.getAll()); // Output: [{ id: '1', name: 'Item 1' }, { id: '2', name: 'Item 2' }]
console.log(repository.getById('1')); // Output: { id: '1', name: 'Item 1' }
repository.update('1', { id: '1', name: 'Updated Item 1' });
console.log(repository.getById('1')); // Output: { id: '1', name: 'Updated Item 1' }
repository.delete('2');
console.log(repository.getAll()); // Output: [{ id: '1', name: 'Updated Item 1' }]
