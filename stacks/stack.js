
class Stack{
    constructor (stackMaxSize) {
        this.stackObj = {};
        this.index = 0;
        this.maxSize = stackMaxSize; //Default
    }

    push(num) {

        if (this.index === this.maxSize)
        {
            console.log("Max capacity already reached. Remove element before adding a new one.");
        }
        else
        {
            this.stackObj[ this.index++ ] = num;
        }
    }

    pop() {
        if( this.index > 0 )
        {
            let valueDeleted = this.stackObj[this.index-1];
            delete this.stackObj[ --this.index ];

            return valueDeleted;
        }
    }

    peek() {
        return ( this.index > 0 )?this.stackObj[this.index-1]:undefined;
    }

    count() {
        return this.index;
    }

    contains(num) {
        for(let i=0; i < this.index; i++)
        {
            if(this.stackObj[i] === num)
            {
                return true;
            }
        }
        return false;
    }

    until(num) {
        while( typeof this.peek() !== "undefined" && this.pop() !== num);
    }

}


module.exports = Stack;
