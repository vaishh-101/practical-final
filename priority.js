class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}
class PriorityQueueLL {
    constructor() {}
    pop(front) {
        front = front.next;
        return front;
    }
    push(front, data, priority) {
        var start = front;
        var temp = new Node(data, priority);
        if (front.priority > priority) {
            temp.next = front;
            front = temp;
        } else {
            while (start.next != null &&
                start.next.priority < priority) {
                start = start.next;
            }
            temp.next = start.next;
            start.next = temp;
        }
        return front;
    }
}
var p = new PriorityQueueLL();
var pq = new Node(4, 1);
pq = p.push(pq, 5, 2);
pq = p.push(pq, 6, 3);
pq = p.push(pq, 7, 0);
while (pq != null) {
    console.log("Data: " + pq.data + " Priority: " +
        pq.priority);
    pq = p.pop(pq);
}


