const Stack = require("./Stack");

function QueueStk(maxCapacity) {
    this.maxCapacity = maxCapacity;
    this.pushStack = new Stack(maxCapacity);
    this.popStack = new Stack(maxCapacity);
}

QueueStk.prototype.enqueue = function(val) {
    if ( (this.pushStack.count() + this.popStack.count()) !== this.maxCapacity) {
        this.pushStack.push(val);
    }
}

QueueStk.prototype.dequeue = function() {
    if(this.popStack.count() === 0) //If there is no element to delete
    {
        this.shiftElementsFromPushToPop();  //last element of popStack will be the first element added in pushStack
    }
    return this.popStack.pop(); //element remove from popStack
}

QueueStk.prototype.shiftElementsFromPushToPop = function() {
    while(this.pushStack.count() > 0) { //transfer all elements from pushStack to popStack
        this.popStack.push(this.pushStack.pop());
    }
}

QueueStk.prototype.peek = function() {
    if(this.popStack.count() === 0) {
        this.shiftElementsFromPushToPop();
    }
    return this.popStack.peek();
}

QueueStk.prototype.count = function() {
    return (this.pushStack.count() + this.popStack.count());
}

module.exports = QueueStk;