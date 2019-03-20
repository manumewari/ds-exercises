const Stack = require('./Stack');

function BracketsTester(stackMaxCapacity) {
    this.stringStack = new Stack(stackMaxCapacity);
    this.count = 0;
}

BracketsTester.prototype.checkBrackets = function(stringValue) {

    Array.from(stringValue).forEach(charValue => this.stringStack.push(charValue));

    while ( this.stringStack.peek() ) {

        var poppedElement = this.stringStack.pop();

        if(this.count === 0 && poppedElement === "(") {//If opening braces comes first -> stop.
            return false;
        }
        else if ( poppedElement === ")" ) {
            this.count ++;
        }
        else if ( poppedElement === "(" ) {
            this.count --;
        }

    }
    return (this.count === 0)
}

module.exports = BracketsTester;
