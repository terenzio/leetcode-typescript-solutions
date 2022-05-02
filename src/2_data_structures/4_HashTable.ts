export class LinkedListNode<T> {
    data: T;
    next: LinkedListNode<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

export class LinkedList<T> {
    head: LinkedListNode<T> | null = null;
    comparator: (a: T, b: T) => boolean;

    constructor(comparator: (a: T, b: T) => boolean) {
        this.comparator = comparator;
    }

    append(data: T): void {
        if (!this.head) {
            this.head = new LinkedListNode(data);
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = new LinkedListNode(data);
        }
    }

    delete(data: T): void {
        if (!this.head) return;

        // Check if the head node is the node to be removed
        if (this.comparator(this.head.data, data)) {
            this.head = this.head.next;
            return;
        }

        let current = this.head.next;
        let previous = this.head;

        /**
         * Search for the node to be removed and keep track of its previous node
         *
         * If it were a double linked list, we could simply search the node
         * and it would have a pointer to the previous node
         **/
        while (current) {
            if (this.comparator(current.data, data)) {
                current = null;
            } else {
                previous = current;
                current = current.next;
            }
        }

        /**
         * set previous.next to target.next, if the node target is not found,
         * the 'previous' will point to the last node,
         * since the last node hasn't next, nothing will happen
         **/
        previous.next = previous.next ? previous.next.next : null;
    }

    search(data: T): LinkedListNode<T> | null {
        let current = this.head;
        while (current) {
            if (this.comparator(current.data, data)) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    traverse() {
        let current = this.head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

class HashTable {
    private size: number;
    private data: LinkedList<string>[] = [];

    constructor(size: number) {
        this.size = size;
    }

    hash(value: string): number {
        const sum = value
            .split("")
            .reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0);

        // force sum into the hash table size
        return sum % this.size;
    }

    insert(value: string): void {
        const index = this.hash(value);

        if (!this.data[index]) {
            this.data[index] = new LinkedList<string>(
                (a: string, b: string) => a === b
            );
        }

        this.data[index].append(value);
    }

    search(value: string): string | null {
        const index = this.hash(value);
        console.log(this.data);
        if (this.data[index]) {
            return this.data[index].search(value)!.data;
        }

        return null;
    }
}

const hashTable = new HashTable(10);

hashTable.insert("aabb");
hashTable.insert("bbcc");
hashTable.insert("abcd");

console.log(hashTable.search("abcd"));