
class Queue {
    constructor (maxCapacity = 10) {
        this.maxCapacity = maxCapacity;
        this.queue = {}
        this.startIndex = 0; //start from this position
        this.endIndex = 0; //Nothing to remove
    }

    enqueue(value) {

        if( this.count() < this.maxCapacity)
        {
            this.queue[ this.endIndex++ ] = value;
        }
    }

    dequeue() {

        if (this.count() > 0)
        {
            let valueDeleted = this.queue[ this.startIndex ];
            delete this.queue[ this.startIndex++ ];
            return valueDeleted;
        }
    }

    peek() {
        return (this.count() > 0)? this.queue[this.startIndex]:undefined;
    }

    count() {
        return (this.endIndex - this.startIndex);
    }

    contains(value) {
        for (let i=this.startIndex; i<this.endIndex; i++) {
            if(value === this.queue[i]) {
                return true;
            }
        }
        return false;
    }

    until(value) {
        while ( this.count() > 0 && this.dequeue() !== value); //while there is an element to delete
    }
}

module.exports = Queue;

