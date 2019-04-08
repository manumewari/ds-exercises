
var FreqStack = function() {
    this.maxCapacity = 10;
    this.stack = {};
    this.map = {};
    this.uniqueNumbers = new Array(this.maxCapacity);
    this.index = 0;
    this.uniqueIndex = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
    if(this.index < this.maxCapacity) {
        this.stack[this.index++] = x;
        this.map[x] = (this.map[x]===undefined)?1:this.map[x]+1;
        if(this.uniqueNumbers.indexOf(x) === -1) //If number is not already present
        {
            this.uniqueNumbers[this.uniqueIndex++] = x;
        }
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let maxOccurrence;
    this.uniqueNumbers.forEach((elem) => {
        if(maxOccurrence === undefined) {
        maxOccurrence = elem;
    }
else if (this.map[maxOccurrence] <= this.map[elem]) {
        maxOccurrence = elem;
    }
})
    let j = this.index-1;
    while (j >=0 && this.stack[j] !== maxOccurrence) {
        j--;
    };
    let deletedNumber;
    if( j >= 0) {   //Has found element. If element not found, j will be -1
        deletedNumber = this.stack[j];
        this.map[deletedNumber]--;
        delete this.stack[j];
    }

    return deletedNumber;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 */



-------


var FreqStack = function() {
    this.maxCapacity = 10;
    this.stack = {};
    this.map = {};
    this.uniqueNumbers = new Array(this.maxCapacity);
    this.index = 0;
    this.uniqueIndex = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
    if(this.index < this.maxCapacity) {
        this.stack[this.index++] = x;
        this.map[x] = (this.map[x]===undefined)?1:this.map[x]+1;
        if(this.uniqueNumbers.indexOf(x) === -1) //If number is not already present
        {
            this.uniqueNumbers[this.uniqueIndex++] = x;
        }
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let maxOccurrence;
    this.uniqueNumbers.forEach((elem) => {
        if(maxOccurrence === undefined) {
        maxOccurrence = elem;
    }
else if (this.map[maxOccurrence] <= this.map[elem]) {
        maxOccurrence = elem;
    }
})
    let j = this.index-1;
    while (j >=0 && this.stack[j] !== maxOccurrence) {
        j--;
    };
    let deletedNumber;
    if( j >= 0) {   //Has found element. If element not found, j will be -1
        deletedNumber = this.stack[j];
        this.map[deletedNumber]--;
        delete this.stack[j];
    }

    return deletedNumber;
};

/**
 * Your FreqStack object will be instantiated and called as such:*/
var obj = new FreqStack()
obj.push(1);
obj.push(0);
obj.push(0);
obj.push(1);
obj.push(5);
obj.push(4);
obj.push(1);
obj.push(5);
obj.push(1);
obj.push(6);

console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());



-------temp

var FreqStack = function() {
    this.maxCapacity = 10;
    this.stack = {};
    this.map = {};
    this.uniqueNumbers = new Array(this.maxCapacity);
    this.index = 0;
    this.uniqueIndex = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
    if(this.index < this.maxCapacity) {
        this.stack[this.index++] = x;
        this.map[x] = (this.map[x]===undefined)?1:this.map[x]+1;
        if(this.uniqueNumbers.indexOf(x) === -1) //If number is not already present
        {
            this.uniqueNumbers[this.uniqueIndex++] = x;
        }
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let maxOccurrence = [];
    let maxIndex = 0;
    console.log("Start maxOccurrence : "+maxOccurrence);
    console.log("Start this.uniqueNumbers : "+this.uniqueNumbers);
    console.log("Start map[5]:"+this.map[5]+",map[7]:"+this.map[7]+",map[4]:"+this.map[4]);
    this.uniqueNumbers.forEach((elem) => {
        if(maxIndex === 0) {
        maxOccurrence[maxIndex++] = elem;
    }
else if (this.map[maxOccurrence[0]] === this.map[elem]) {
        maxOccurrence[maxIndex++] = elem;
    }
    else if (this.map[maxOccurrence[0]] < this.map[elem]) {
        maxOccurrence = [];
        maxIndex = 0;
        maxOccurrence[maxIndex] = elem;
    }
})
    let j = this.index-1;
    console.log("maxOccurrence : "+maxOccurrence);
    while (j >=0 && maxOccurrence.indexOf(this.stack[j]) === -1) {
        j--;
    };
    console.log("==> j : "+j);
    let deletedNumber;
    if( j >= 0) {   //Has found element. If element not found, j will be -1
        deletedNumber = this.stack[j];
        this.map[deletedNumber]--;
        delete this.stack[j];
    }

    console.log("deletedNumber : "+deletedNumber);

    return deletedNumber;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 */

=============

var FreqStack = function() {
    this.maxCapacity = 10;
    this.stack = {};
    this.map = {};
    this.uniqueNumbers = new Array(this.maxCapacity);
    this.index = 0;
    this.uniqueIndex = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
    if(this.index < this.maxCapacity) {
        this.stack[this.index++] = x;
        this.map[x] = (this.map[x]===undefined)?1:this.map[x]+1;
        if(this.uniqueNumbers.indexOf(x) === -1) //If number is not already present
        {
            this.uniqueNumbers[this.uniqueIndex++] = x;
        }
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let maxOccurrence = [];
    let maxIndex = 0;
    this.uniqueNumbers.forEach((elem) => {
        if(maxIndex === 0) {
        maxOccurrence[maxIndex++] = elem;
    }
else if (this.map[maxOccurrence[0]] === this.map[elem]) {
        maxOccurrence[maxIndex++] = elem;
    }
    else if (this.map[maxOccurrence[0]] < this.map[elem]) {
        maxOccurrence = [];
        maxIndex = 0;
        maxOccurrence[maxIndex] = elem;
    }
})
    let j = this.index-1;
    while (j >=0 && maxOccurrence.indexOf(this.stack[j]) === -1) {
        j--;
    };
    let deletedNumber;
    if( j >= 0) {   //Has found element. If element not found, j will be -1
        deletedNumber = this.stack[j];
        this.map[deletedNumber]--;
        delete this.stack[j];
    }

    return deletedNumber;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 */

========final answer

var FreqStack = function() {
    this.maxCapacity = 10000;
    this.stack = {};
    this.map = {};
    this.uniqueNumbers = new Array(this.maxCapacity);
    this.index = 0;
    this.uniqueIndex = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
    if(this.index < this.maxCapacity) {
        this.stack[this.index++] = x;
        this.map[x] = (this.map[x]===undefined)?1:this.map[x]+1;
        if(this.uniqueNumbers.indexOf(x) === -1) //If number is not already present
        {
            this.uniqueNumbers[this.uniqueIndex++] = x;
        }
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let maxOccurrence = [];
    let maxIndex = 0;
    this.uniqueNumbers.forEach((elem) => {
        if(maxIndex === 0) {
        maxOccurrence[maxIndex++] = elem;
    }
else if (this.map[maxOccurrence[0]] === this.map[elem]) {
        maxOccurrence[maxIndex++] = elem;
    }
    else if (this.map[maxOccurrence[0]] < this.map[elem]) {
        maxOccurrence = [];
        maxIndex = 0;
        maxOccurrence[maxIndex++] = elem;
    }
})
    let j = this.index-1;
    while (j >=0 && maxOccurrence.indexOf(this.stack[j]) === -1) {
        j--;
    };
    let deletedNumber;
    if( j >= 0) {   //Has found element. If element not found, j will be -1
        deletedNumber = this.stack[j];
        this.map[deletedNumber]--;
        delete this.stack[j];
    }

    return deletedNumber;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 */
