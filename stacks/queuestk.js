const Stack = require("./Stack");

class QueueStk {

    constructor(maxCapacity) {
        this.maxCapacity = maxCapacity;
        this.pushStack = new Stack(maxCapacity);
        this.popStack = new Stack(maxCapacity);
    }

    enqueue(val) {
        if ( (this.pushStack.count() + this.popStack.count()) !== this.maxCapacity) {
            this.pushStack.push(val);
        }
    }

    dequeue() {
        if(this.popStack.count() === 0) //If there is no element to delete
        {
            this.shiftElementsFromPushToPop();  //last element of popStack will be the first element added in pushStack
        }
        return this.popStack.pop(); //element remove from popStack
    }

    shiftElementsFromPushToPop() {
        while(this.pushStack.count() > 0) { //transfer all elements from pushStack to popStack
            this.popStack.push(this.pushStack.pop());
        }
    }

    peek() {
        if(this.popStack.count() === 0) {
            this.shiftElementsFromPushToPop();
        }
        return this.popStack.peek();
    }

    count() {
        return (this.pushStack.count() + this.popStack.count());
    }
}

module.exports = QueueStk;