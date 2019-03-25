
function Queue(maxCapacity) {
    this.maxCapacity = maxCapacity;
    this.queue = {}
    this.startIndex = 0; //start from this position
    this.endIndex = 0; //Nothing to remove
}

Queue.prototype.enqueue = function(value) {

    if( this.count() < this.maxCapacity)
    {
        this.queue[ this.endIndex++ ] = value;
    }
}

Queue.prototype.dequeue = function() {

    if (this.count() > 0)
    {
        var valueDeleted = this.queue[ this.startIndex ];
        delete this.queue[ this.startIndex++ ];
        return valueDeleted;
    }
}

Queue.prototype.peek = function() {
    return (this.count() > 0)? this.queue[this.startIndex]:undefined;
}

Queue.prototype.count = function() {
    return (this.endIndex - this.startIndex);
}

Queue.prototype.contains = function(value) {
    for (var i=this.startIndex; i<this.endIndex; i++) {
        if(value === this.queue[i]) {
            return true;
        }
    }
    return false;
}

Queue.prototype.until = function(value) {
    while ( this.count() > 0 && this.dequeue() !== value); //while there is an element to delete
}

module.exports = Queue;

