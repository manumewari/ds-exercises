const DoubleEndedQueue = require("./DoubleEndedQueue");

test('Queue size should be zero with out adding any element', () => {
    let queue = new DoubleEndedQueue(5);
    expect(queue.count()).toBe(0);
});

test('Queue size should be 1 after adding 1 element on left', () => {
    let queue = new DoubleEndedQueue(5);
    queue.enqueueLeft(1);
    expect(queue.count()).toBe(1);
});

test('Queue size should be 1 after adding 1 element on right', () => {
    let queue = new DoubleEndedQueue(5);
    queue.enqueueRight(1);
    expect(queue.count()).toBe(1);
});

test('count() should match the number of elements added from left', () => {
    let queue = new DoubleEndedQueue(5);
    [11, 12, 13, 14].forEach(elem => queue.enqueueLeft(elem));
    expect(queue.count()).toBe(4);
});

test('count() should match the number of elements added from right', () => {
    let queue = new DoubleEndedQueue(5);
    [11, 12, 13, 14].forEach(elem => queue.enqueueRight(elem));
    expect(queue.count()).toBe(4);
});

test('count() should be 2 if 1 element is added from left and 1 is added from right', () => {
    let queue = new DoubleEndedQueue(5);
    queue.enqueueLeft(1);
    queue.enqueueRight(2);
    expect(queue.count()).toBe(2);
});

test('count() should reduce every time dequeueLeft() and dequeueRight() is called', () => {
    let queue = new DoubleEndedQueue(5);
    [11, 12, 13, 14, 15].forEach(elem => queue.enqueueLeft(elem));
    expect(queue.count()).toBe(5);
    queue.dequeueLeft();
    expect(queue.count()).toBe(4);
    queue.dequeueRight();
    expect(queue.count()).toBe(3);
    queue.dequeueLeft();
    expect(queue.count()).toBe(2);
    queue.dequeueRight();
    expect(queue.count()).toBe(1);
    queue.dequeueLeft();
    expect(queue.count()).toBe(0);
});

test('count() should reduce every time dequeueLeft() and dequeueRight() is called', () => {
    let queue = new DoubleEndedQueue(5);
    [11, 12, 13, 14, 15].forEach(elem => queue.enqueueRight(elem));
    expect(queue.count()).toBe(5);
    queue.dequeueLeft();
    expect(queue.count()).toBe(4);
    queue.dequeueLeft();
    expect(queue.count()).toBe(3);
    queue.dequeueLeft();
    expect(queue.count()).toBe(2);
    queue.dequeueLeft();
    expect(queue.count()).toBe(1);
    queue.dequeueLeft();
    expect(queue.count()).toBe(0);
});

test('dequeueLeft() should remove left most element added (11)', () => {
    let queue = new DoubleEndedQueue(5);
    [11, 12, 13, 14, 15].forEach(elem => queue.enqueueRight(elem));
    expect(queue.dequeueLeft()).toBe(11);
});

test('dequeueRight() should remove left most element added (15)', () => {
    let queue = new DoubleEndedQueue(5);
    [11, 12, 13, 14, 15].forEach(elem => queue.enqueueRight(elem));
    expect(queue.dequeueRight()).toBe(15);
});

test('When queue is full, remove 2 elements from left and add 2 elements from right. peekLeft() should return 13 and peekRight() should be 17', () => {
    let queue = new DoubleEndedQueue(5);
    [11, 12, 13, 14, 15].forEach(elem => queue.enqueueRight(elem));
    queue.dequeueLeft();
    queue.enqueueRight(16);
    queue.dequeueLeft();
    queue.enqueueRight(17);
    expect(queue.peekLeft()).toBe(13);
    expect(queue.peekRight()).toBe(17);
});

