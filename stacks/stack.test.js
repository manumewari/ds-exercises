const Stack = require('./Stack');

test('Count should match the number of items pushed', () => {
    var testStack = new Stack(5);

    testStack.push(10);
    expect(testStack.count()).toBe(1);

    testStack.push(11);
    expect(testStack.count()).toBe(2);

    testStack.push(12);
    expect(testStack.count()).toBe(3);

    testStack.pop();
    expect(testStack.count()).toBe(2);
});

test('Count should be 0 when no element is pushed in stack', () => {
    expect((new Stack(5)).count()).toBe(0);
});

test('Count should decrease when element is popped from stack', () => {
    var testStack = new Stack(5);

    [10, 11, 12, 13].forEach(element => testStack.push(element));

    expect(testStack.count()).toBe(4);

    testStack.pop();
    expect(testStack.count()).toBe(3);
    testStack.pop();
    expect(testStack.count()).toBe(2);
    testStack.pop();
    expect(testStack.count()).toBe(1);
    testStack.pop();
    expect(testStack.count()).toBe(0);

});

test('last element pushed should be returned when peek function called', () => {
    var testStack = new Stack(5);

    [10, 11, 12, 13].forEach(element => testStack.push(element));

    expect(testStack.peek()).toBe(13);
});

test('contains should return true when element searched was pushed in stack', () => {
    var testStack = new Stack(5);

    [10, 11, 12, 13].forEach(element => testStack.push(element));

    expect(testStack.contains(11)).toBeTruthy();
});

test('contains should return false when element searched was pushed in stack', () => {
    var testStack = new Stack(5);

    [10, 11, 12, 13].forEach(element => testStack.push(element));

    expect(testStack.contains(18)).toBeFalsy();
});

test('count() should return 0 if element passed was not present in stack', () => {
    var testStack = new Stack(5);

    [10, 11, 12, 13].forEach(element => testStack.push(element));

    testStack.until(18);
    expect(testStack.count()).toBe(0);
});

test('count() should return 2 if 3rd element passed was not present in stack', () => {
    var testStack = new Stack(5);

    [10, 11, 12, 13].forEach(element => testStack.push(element));

    testStack.until(12);
    expect(testStack.count()).toBe(2);
});

test('count() should stop increasing when max size limit of stack is reached', () => {
    var testStack = new Stack(5);

    [10, 11, 12, 13, 14].forEach(element => testStack.push(element));

    expect(testStack.count()).toBe(5);

    testStack.push(15);
    expect(testStack.count()).toBe(5);
});

test('peek() should return same element once stack is reached', () => {
    var testStack = new Stack(5);

    [10, 11, 12, 13, 14].forEach(element => testStack.push(element));

    expect(testStack.peek()).toBe(14);

    testStack.push(15);
    expect(testStack.peek()).toBe(14);
});
