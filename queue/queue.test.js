const Queue = require("./Queue");

test('Queue size should be zero with out adding any element', () => {
    let queue = new Queue(5);
    expect(queue.count()).toBe(0);
});

test('Queue size should be one after adding 1 element', () => {
    let queue = new Queue(5);
    queue.enqueue(11);
    expect(queue.count()).toBe(1);
});


test('count() should match the number of elements added', () => {
    let queue = new Queue(5);
    [11, 12, 13, 14].forEach(elem => queue.enqueue(elem));
    expect(queue.count()).toBe(4);
});

test('count() should reduce every time dequeue() is called', () => {
    let queue = new Queue(5);
    [11, 12, 13, 14, 15].forEach(elem => queue.enqueue(elem));
    expect(queue.count()).toBe(5);
    queue.dequeue();
    expect(queue.count()).toBe(4);
    queue.dequeue();
    expect(queue.count()).toBe(3);
    queue.dequeue();
    expect(queue.count()).toBe(2);
    queue.dequeue();
    expect(queue.count()).toBe(1);
    queue.dequeue();
    expect(queue.count()).toBe(0);
});

test('Queue size should be not exceed maximum capacity when try to add any element after reaching maximum capacity', () => {
    let queue = new Queue(5);
    [11, 12, 13, 14, 15].forEach(element => queue.enqueue(element));
    expect((queue.count())).toBe(5);
    queue.enqueue(16);
    expect(queue.count()).toBe(5);
});

test('dequeue() should return the first element added', () => {
    let queue = new Queue(5);
    [11, 12, 13, 14].forEach(elem => queue.enqueue(elem));
    expect(queue.dequeue()).toBe(11);
});

test('peek() should return the first element added', () => {
    let queue = new Queue(5);
    [11, 12, 13, 14].forEach(elem => queue.enqueue(elem));
    expect(queue.peek()).toBe(11);
});

test('peek() should return the second element added after dequeue() is called once', () => {
    let queue = new Queue(5);
    [11, 12, 13, 14].forEach(elem => queue.enqueue(elem));
    queue.dequeue();
    expect(queue.peek()).toBe(12);
});

test('contains(num) should return true if element is present in queue', () => {
    let queue = new Queue(5);
    [11, 12, 13, 14].forEach(elem => queue.enqueue(elem));
    expect(queue.contains(13)).toBeTruthy();
});

test('contains(num) should return false if element is present in queue', () => {
    let queue = new Queue(5);
    [11, 12, 13, 14].forEach(elem => queue.enqueue(elem));
    expect(queue.contains(21)).toBeFalsy();
});

test('until() should delete all numbers from queue if number is not present in queue', () => {
    let queue = new Queue(5);
    [11, 12, 13, 14].forEach(elem => queue.enqueue(elem));
    queue.until(34);
    expect(queue.count()).toBe(0);
});

test('until() should delete 11, 12 & 13 from queue if 13 is passed', () => {
    let queue = new Queue(5);
    [11, 12, 13, 14].forEach(elem => queue.enqueue(elem));
    queue.until(13);
    expect(queue.peek()).toBe(14);
});


