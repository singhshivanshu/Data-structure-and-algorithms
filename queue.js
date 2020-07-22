//queue follows the principle of FIFO (First In First Out) or LILO (Last In Last Out)

class Queue {
    constructor() {
        this.items = [];
    }
    // pushing element
    enqueue(element) {
        this.items.push(element);
    }
    // deleting first element
    dequeue() {
        if (this.items.length === 0) {
            return "Queue is empty";
        } else {
            this.items.splice(0, 1);
        }
    }
}
