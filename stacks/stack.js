
function Stack(stackMaxSize){
    this.stackObj = {};
    this.index = 0;
    this.maxSize = stackMaxSize; //Default
}

Stack.prototype.push = function(num) {

    if (this.index === this.maxSize)
    {
        console.log("Max capacity already reached. Remove element before adding a new one.");
    }
    else
    {
        this.stackObj[ this.index++ ] = num;
    }
}

Stack.prototype.pop = function() {
    if( this.index === 0 )
    {
        console.log("there are no elements in the stack");
    }
    else
    {
        var valueDeleted = this.stackObj[this.index-1];
        delete this.stackObj[ --this.index ];

        return valueDeleted;
    }
}


Stack.prototype.peek = function() {
    if( this.index === 0 )
    {
        console.log("there are no elements in the stack");
    }
    else
    {
        return this.stackObj[this.index-1];
    }
}

Stack.prototype.count = function() {
    return this.index;
}

Stack.prototype.contains = function(num) {
    for(var i=0; i < this.index; i++)
    {
        if(this.stackObj[i] === num)
        {
            return true;
        }
    }
    return false;
}

Stack.prototype.until = function(num) {
    while( typeof this.peek() !== "undefined" && this.pop() !== num);
}

module.exports = Stack;
