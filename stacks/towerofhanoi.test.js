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

test('Order of discs on tower A should be Disc1, Disc2, Disc3, Disc4 (Disc4 at bottom and Disc1 at top) before solving puzzle for 4 disc', () => {

    var testStack = new TowerOfHanoi(4);
    expect(testStack.towerA.pop()).toBe("Disc1");
    expect(testStack.towerA.pop()).toBe("Disc2");
    expect(testStack.towerA.pop()).toBe("Disc3");
    expect(testStack.towerA.pop()).toBe("Disc4");
});

test('Order of discs on tower C should be Disc1, Disc2, Disc3, Disc4 (Disc4 at bottom and Disc1 at top) after solving puzzle for 4 disc in beginning', () => {

    var testStack = new TowerOfHanoi(4);

    testStack.startMovingDiscs();

    expect(testStack.towerC.pop()).toBe("Disc1");
    expect(testStack.towerC.pop()).toBe("Disc2");
    expect(testStack.towerC.pop()).toBe("Disc3");
    expect(testStack.towerC.pop()).toBe("Disc4");
});
