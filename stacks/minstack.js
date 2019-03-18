
function MinStack(){
    this.stackObj = {};
    this.index = 0;
    this.maxSize = 10;
    this.minObj = {};
}

MinStack.prototype.push = function(num) {

    if (this.index === this.maxSize)
    {
        console.log("Max capacity already reached. Remove element before adding a new one.");
    }
    else
    {
        if(this.index === 0) //First element
        {
            this.minObj[ this.index ] = num;
        }
        else
        {
            this.minObj[ this.index ] = ( this.minObj[ this.index-1 ] < num )? this.minObj[ this.index-1 ] : num;
        }

        this.stackObj[ this.index++ ] = num;
    }
}

MinStack.prototype.pop = function() {
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

MinStack.prototype.min = function() {
    if( this.index === 0 )
    {
        console.log("there are no elements in the stack");
    }
    else
    {
        return this.minObj[this.index-1];
    }
}

module.exports = MinStack;


