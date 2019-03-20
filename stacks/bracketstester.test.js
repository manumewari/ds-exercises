const BracketsTester = require('./BracketsTester');

test('test ', () => {
    var testString = "sqrt(5*(3+8)/(4-2))";
    var testStack = new BracketsTester(testString.length);

    expect(testStack.checkBrackets(testString)).toBeTruthy();

});

