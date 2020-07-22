// stack follows the principle LIFO(Last In First Out) ot FILO(First In Last Out)
class stack {
    constructor() {
        this.items = []
    }
    // push the elemtent at begining
    push(element) {
        this.item.push(element)
    }
    // pop the last element
    pop() {
        if(this.items.length === 0) {
            return "Stack is already empty"
        }
        else {
            this.item.pop()
        }
    }
}