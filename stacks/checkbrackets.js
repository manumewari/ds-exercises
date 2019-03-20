const Stack = require('./Stack');

function checkBrackets(stringValue) {
    var stringStack = new Stack(stringValue.length);
    var count = 0;

    Array.from(stringValue).forEach(charValue => ((charValue === "(" || charValue === ")") && stringStack.push(charValue)));

    while ( stringStack.peek() ) {

        var poppedElement = stringStack.pop();

        if(count === 0 && poppedElement === "(") {//If opening braces comes first -> stop.
            return false;
        }
        else if ( poppedElement === ")" ) {
            count ++;
        }
        else if ( poppedElement === "(" ) {
            count --;
        }

    }
    return (count === 0)
}


module.exports = checkBrackets;

