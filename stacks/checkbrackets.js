const Stack = require('./Stack');

const checkBrackets = (stringValue) => {
    let stringStack = new Stack(stringValue.length);
    let count = 0;

    Array.from(stringValue).forEach(charValue => ((charValue === "(" || charValue === ")") && stringStack.push(charValue)));

    while ( stringStack.peek() ) {

        let poppedElement = stringStack.pop();

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

