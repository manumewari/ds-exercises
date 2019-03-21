const checkBrackets = require('./checkBrackets');

test('test if the brackets are balanced, each opening bracket has one closing bracket then checkBrackets() should return true', () => {
    var testString = "sqrt(5*(3+8)/ (4-0) )";
    var testStack = checkBrackets(testString);
    expect(testStack).toBeTruthy();
});

test('test if the brackets are not balanced then checkBrackets() should return false', () => {
    var testString = "sqrt(5*(3+8)) / (4-0) )";
    var testStack = checkBrackets(testString);
    expect(testStack).toBeFalsy();
});

test('test checkBrackets() should return true if there are only numbers and no brackets', () => {
    var testString = "100014234320030";
    var testStack = checkBrackets(testString);
    expect(testStack).toBeTruthy();
});

test('test checkBrackets() should return true if there are only numbers and balanced brackets', () => {
    var testString = "(5*(3+8)/ (4-0) )";
    var testStack = checkBrackets(testString);
    expect(testStack).toBeTruthy();
});

test('test checkBrackets() should return false if there are only numbers and unbalanced brackets', () => {
    var testString = "(5*(3+8)/ (4-0) ))";
    var testStack = checkBrackets(testString);
    expect(testStack).toBeFalsy();
});

test('test checkBrackets() should return true if string is empty', () => {
    var testString = "";
    var testStack = checkBrackets(testString);
    expect(testStack).toBeTruthy();
});
