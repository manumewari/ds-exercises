
class DoubleEndedQueue {
    constructor (maxCapacity = 10) {
        this.maxCapacity = maxCapacity;
        this.queue = {}
        this.startIndex = -1;
        this.endIndex = -1;
        this.totalElements = 0;
    }

    enqueueLeft(value) {

        if( this.totalElements === 0 ) {   //If queue is blank
            this.queue[ ++this.startIndex ] = value;      //Add first element at 0 position
            ++this.endIndex;    //End index is also 0
            this.totalElements ++;
        }
        else if ( this.totalElements < this.maxCapacity )
        {
            if (this.startIndex === 0) {    //If start index is at 0 position
                this.startIndex = this.maxCapacity-1;
                this.queue[ this.startIndex ] = value;
            }
            else {
                this.queue[ --this.startIndex ] = value;
            }
            this.totalElements ++;
        }
    }

    enqueueRight(value) {

        if ( this.totalElements === 0 ) {   //If queue is blank
            this.queue[ ++this.startIndex ] = value;      //Add first element at 0 position
            ++this.endIndex;    //End index is also 0
            this.totalElements ++;
        }
        else if ( this.totalElements < this.maxCapacity )
        {
            if ( this.endIndex === this.maxCapacity-1 ) {   //If end index is at last position
                this.endIndex = 0;
                this.queue[ this.endIndex ] = value;
            }
            else {
                this.queue[ ++this.endIndex ] = value;
            }
            this.totalElements ++;
        }
    }

    dequeueLeft() {

        if (this.totalElements > 0)
        {
            let valueDeleted = this.queue[ this.startIndex ];
            delete this.queue[ this.startIndex ];
            if ( this.totalElements === 1)
            {
                this.startIndex = -1;
                this.endIndex = -1;
                this.totalElements--;
            }
            else {
                if ( this.startIndex === this.maxCapacity-1 ) {
                    this.startIndex = 0;
                }
                else {
                    this.startIndex ++;
                }
                this.totalElements--;
            }

            return valueDeleted;
        }
    }

    dequeueRight() {

        if (this.totalElements > 0)
        {
            let valueDeleted = this.queue[ this.endIndex ];
            delete this.queue[ this.endIndex ];
            if ( this.totalElements === 1)
            {
                this.startIndex = -1;
                this.endIndex = -1;
                this.totalElements--;
            }
            else {
                if ( this.endIndex === 0 ) {
                    this.endIndex = this.maxCapacity-1;
                }
                else {
                    this.endIndex --;
                }
                this.totalElements--;
            }

            return valueDeleted;
        }
    }

    peekLeft() {
        return (this.count() > 0)? this.queue[this.startIndex]:undefined;
    }

    peekRight() {
        return (this.count() > 0)? this.queue[this.endIndex]:undefined;
    }

    count() {
        return this.totalElements;
    }
}

module.exports = DoubleEndedQueue;

