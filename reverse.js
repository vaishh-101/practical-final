//Write a program for reverse stack using queue


class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class StackLL {
    constructor() {
        this.top = null;
    }
    push(data) {
        var newNode = new StackNode(data);
        newNode.next = this.top;
        this.top = newNode;
        return this;
    }
    pop() {
        if (!this.top)
            console.log("Stack is Empty");
        else {
            var temp = this.top.data;
            this.top = this.top.next;
            return temp;
        }
    }
    disp() {
        if (!this.top)
            console.log("Stack is empty");
        var
            temp = this.top;
        console.log("Stack Data....");
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}
class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class QueueLL {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    enqueue(data) {
        var newNode = new QueueNode(data);
        if (!this.front)
            this.front = this.rear = newNode;
        else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }
    dequeue() {
        if (!this.front)("Queue is Empty");
        else {
            var temp = this.front.data;
            this.front = this.front.next;
            return temp;
        }
    }
    disp() {
        if (this.front == null)
            console.log("Queue Empty");
        else {
            var current = this.front;
            console.log("Queue Data...");
            while (current != null) {
                console.log(current.data);
                current = current.next;
            }
        }
    }
}
var stk = new StackLL();
var queue = new QueueLL();
stk.push(10);
stk.push(20);
stk.push(30);
stk.disp();
console.log("---------------------");
while (stk.top != null)
    queue.enqueue(stk.pop());
queue.disp();
console.log("---------------------");
console.log("Reverse ");
while (queue.front != null)
    stk.push(queue.dequeue());
stk.disp();