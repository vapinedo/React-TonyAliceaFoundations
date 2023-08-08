class LinkedListNode {
    constructor(val, next = null) {
        this.value = val;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(val) {
        const newNode = new LinkedListNode(val);

        // Case there's not head yet, then create it one
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        // append new node at the very end
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    pop() {
        let originalHead = this.head;
        if (this.head) {
            this.head = this.head.next;
        }
        return originalHead ? originalHead.value : null;
    }

    print() {
        let currentNode = this.head;
        while(currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

let myQueue = new Queue();
myQueue.append("Victor");
myQueue.append("Pinedo");
myQueue.append("Martinez");
myQueue.print();
console.log("---");
console.log("Popped value: " + myQueue.pop());
console.log("Popped value: " + myQueue.pop());
myQueue.print();
