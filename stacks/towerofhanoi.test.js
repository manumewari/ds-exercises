const TowerOfHanoi = require('./TowerOfHanoi');

test('Number of discs on tower A should be 4 initially', () => {

    var testStack = new TowerOfHanoi(4);

    expect(testStack.towerA.count()).toBe(4);
});

test('Number of discs on tower B should be 0 initially', () => {

    var testStack = new TowerOfHanoi(4);

    expect(testStack.towerB.count()).toBe(0);
});

test('Number of discs on tower C should be 0 initially', () => {

    var testStack = new TowerOfHanoi(4);

    expect(testStack.towerC.count()).toBe(0);
});

test('Number of discs on tower A should be 0 after solving puzzle', () => {

    var testStack = new TowerOfHanoi(4);

    testStack.startMovingDiscs();

    expect(testStack.towerA.count()).toBe(0);
});

test('Number of discs on tower B should be 0 after solving puzzle', () => {

    var testStack = new TowerOfHanoi(4);

    testStack.startMovingDiscs();

    expect(testStack.towerB.count()).toBe(0);
});

test('Number of discs on tower C should be 4 after solving puzzle', () => {

    var testStack = new TowerOfHanoi(4);

    testStack.startMovingDiscs();

    expect(testStack.towerC.count()).toBe(4);
});
