class LinkedListNode {
    constructor(val, next = null) {
        this.value = val;
        this.next = next;
    }
}

class LinkedList {
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

    print() {
        let currentNode = this.head;
        while(currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

let myLinkedList = new LinkedList();
myLinkedList.append("Victor");
myLinkedList.append("Pinedo");
myLinkedList.append("Martinez");
myLinkedList.print();
