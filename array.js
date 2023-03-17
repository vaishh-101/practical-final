class QueueArray {
    constructor() {
        this.front = this.rear = 0;
        this.len = 5;
        this.arr = [this.len];
    }
    enqueue(data) {
        if (this.rear == this.len - 1) {
            console.log("Queue is Overflow");
        } else {
            this.arr[this.rear] = data;
            this.rear++;
        }
        return this;
    }
    dequeue() {
        if (this.front == this.rear)
            console.log("Queue is Empty!!! Deletion is not possible!!!");
        else {
            console.log("Deleted :",
                this.arr[this.front]);
            console.log("------------");
            this.arr[this.front] = undefined;
            this.front++;
            if (this.front == this.rear)
                this.front = this.rear = -1;
        }
        return this;
    }
    disp() {
        if (this.rear == -1)
            console.log("Queue is Empty");
        else {
            console.log("Queue Data...");
            for (var i = 0; i < this.len; i++) {
                if (this.arr[i] != undefined)
                    console.log(this.arr[i]);
            }
        }
    }
}
var qa = new QueueArray();
qa.enqueue(100);
qa.enqueue(200);
qa.enqueue(300);
qa.disp();
console.log("------------");
qa.dequeue();
qa.disp();