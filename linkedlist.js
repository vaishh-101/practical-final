class QueueNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class QueueLL {
    constructor() {
        this.front = null
        this.rear = null
    }
    enqueue(data) {
        var newNode = new QueueNode(data);
        if (!this.front)
            this.front = this.rear = newNode;
        else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        console.log("Element", data, "Inserted")
    }
    dequeue() {
        if (this.front == null)
            console.log("Queue is Empty")
        else {
            var temp = this.front;
            this.front = this.front.next
            console.log("Deleted Element:- " +
                temp.data)
        }
    }
    display() {
        if (this.front == null)
            console.log("queue Is Empty")
        else {
            console.log("Elements in queue Are")
            var temp = this.front
            while (temp != null) {
                console.log(temp.data)
                temp = temp.next
            }
        }
    }
}
const Q = new QueueLL()
Q.enqueue(100)
Q.enqueue(200)
Q.enqueue(300)
Q.display()
Q.dequeue()
Q.display()