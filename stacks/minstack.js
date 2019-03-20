const Stack = require('./Stack');

function MinStack(stackMaxSize){
    this.stack = new Stack(stackMaxSize);
    this.minStack = new Stack(stackMaxSize);
}

MinStack.prototype.push = function(num) {
    var currentMinimum = this.minStack.peek();
    if(this.minStack.count() === 0 || (!currentMinimum || currentMinimum > num) ) //First element
    {
        this.minStack.push(num);
    }
    else
    {
        this.minStack.push(currentMinimum);
    }
    this.stack.push(num);
}

MinStack.prototype.pop = function() {
    this.minStack.pop();
    this.stack.pop();
}

MinStack.prototype.min = function() {
    if( this.minStack.count() === 0 )
    {
        console.log("there are no elements in the stack");
    }
    else
    {
        return this.minStack.peek();
    }
}

module.exports = MinStack;


