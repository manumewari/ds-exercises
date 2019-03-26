const checkBrackets = require('./checkBrackets');

test('test if the brackets are balanced, each opening bracket has one closing bracket then checkBrackets() should return true', () => {
    let testString = "sqrt(5*(3+8)/ (4-0) )";
    let testStack = checkBrackets(testString);
    expect(testStack).toBeTruthy();
});

test('test if the brackets are not balanced then checkBrackets() should return false', () => {
    let testString = "sqrt(5*(3+8)) / (4-0) )";
    let testStack = checkBrackets(testString);
    expect(testStack).toBeFalsy();
});

test('test checkBrackets() should return true if there are only numbers and no brackets', () => {
    let testString = "100014234320030";
    let testStack = checkBrackets(testString);
    expect(testStack).toBeTruthy();
});

test('test checkBrackets() should return true if there are only numbers and balanced brackets', () => {
    let testString = "(5*(3+8)/ (4-0) )";
    let testStack = checkBrackets(testString);
    expect(testStack).toBeTruthy();
});

test('test checkBrackets() should return false if there are only numbers and unbalanced brackets', () => {
    let testString = "(5*(3+8)/ (4-0) ))";
    let testStack = checkBrackets(testString);
    expect(testStack).toBeFalsy();
});

test('test checkBrackets() should return true if string is empty', () => {
    let testString = "";
    let testStack = checkBrackets(testString);
    expect(testStack).toBeTruthy();
});
