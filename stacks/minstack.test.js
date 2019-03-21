const MinStack = require('./MinStack');

test('min should return the smallest item in stack', () => {
    var testStack = new MinStack(10);

    [15,11,12,7,8,2,12].forEach(element => testStack.push(element));

    expect(testStack.min()).toBe(2);
});

test('when min is deleted, min() should return the next smallest item in stack', () => {
    var testStack = new MinStack(10);

    [15,11,12,7,8,2,12].forEach(element => testStack.push(element));

    expect(testStack.min()).toBe(2);

    testStack.pop(); //12 deleted
    expect(testStack.min()).toBe(2);

    testStack.pop(); //2 deleted
    expect(testStack.min()).toBe(7);

    testStack.pop(); //8 deleted
    expect(testStack.min()).toBe(7);

    testStack.pop(); //7 deleted
    expect(testStack.min()).toBe(11);
});

test('when a new smaller number is added, min() should return the new smallest item in stack', () => {
    var testStack = new MinStack(10);

    [15,11,12,7,8,2,12].forEach(element => testStack.push(element));

    expect(testStack.min()).toBe(2);

    testStack.push(1);
    expect(testStack.min()).toBe(1);
});

