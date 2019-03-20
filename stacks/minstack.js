const Stack = require('./Stack');

function MinStack(stackMaxSize){
    this.stack = new Stack(stackMaxSize);
    this.minStack = new Stack(stackMaxSize);
}

MinStack.prototype.push = function(num) {
    var currentMinimum = this.minStack.peek();
    if(this.minStack.count() === 0 || (typeof currentMinimum === "undefined" || currentMinimum > num) )
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
    return this.minStack.peek();
}

module.exports = MinStack;


