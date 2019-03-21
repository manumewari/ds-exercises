const Stack = require('./Stack');

function MinStack(stackMaxSize){
    this.stack = new Stack(stackMaxSize);
    this.minStack = new Stack(stackMaxSize);
}

MinStack.prototype.push = function(num) {
    var currentMinimum = this.minStack.peek();
    var newCurrentMinimum;
    if(this.minStack.count() === 0 || (typeof currentMinimum === "undefined" || currentMinimum > num) )
    {
        newCurrentMinimum = num;
    }
    else
    {
        newCurrentMinimum = currentMinimum;
    }
    this.minStack.push(newCurrentMinimum);
    this.stack.push(num);
}

MinStack.prototype.pop = function() {
    this.minStack.pop();
    return this.stack.pop();
}

MinStack.prototype.min = function() {
    return this.minStack.peek();
}

module.exports = MinStack;


