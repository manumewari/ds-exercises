const Stack = require('./Stack');

class MinStack {
    constructor(stackMaxSize) {
        this.stack = new Stack(stackMaxSize);
        this.minStack = new Stack(stackMaxSize);
    }

    push(num) {
        let currentMinimum = this.minStack.peek();
        let newCurrentMinimum;
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

    pop() {
        this.minStack.pop();
        return this.stack.pop();
    }

    min() {
        return this.minStack.peek();
    }
}

module.exports = MinStack;

