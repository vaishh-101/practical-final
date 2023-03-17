class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class CircularQueueLL {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    enqueue(data) {
        var newNode = new Node(data);
        if (!this.front) {
            this.front = newNode;
            this.rear = this.front;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
            newNode.next = this.front;
        }
        return this;
    }
    dequeue() {
        if (!this.front)
            console.log("Queue is Empty");
        else {
            this.front = this.front.next;
            this.rear.next = this.front;
        }
        return this;
    }
    disp() {
        if (this.front == null)
            console.log("Empty");
        else {
            var current = this.front;
            console.log("Queue Data...");
            do {
                console.log(current.data);
                current = current.next;
            } while (current.data != this.front.data);
        }
    }
}
var queue = new CircularQueueLL();
queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(30);
queue.enqueue(40);
queue.disp();
queue.dequeue();
console.log("After Dequeue");
queue.disp();
queue.enqueue(50);
console.log("After Enqueue");
queue.disp();