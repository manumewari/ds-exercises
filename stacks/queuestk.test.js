const QueueStk = require("./queuestk");

test('Queue size should be zero with out adding any element', () => {
    var queueStk = new QueueStk(5);

    expect(queueStk.count()).toBe(0);
});

test('Queue size should be one after adding 1 element', () => {
    var queueStk = new QueueStk(5);
    queueStk.enqueue(11);
    expect(queueStk.count()).toBe(1);
});


test('count() should match the number of elements added', () => {
    var queueStk = new QueueStk(5);
    [11, 12, 13, 14].forEach(elem => queueStk.enqueue(elem));
    expect(queueStk.count()).toBe(4);
});

test('count() should reduce every time dequeue() is called', () => {
    var queueStk = new QueueStk(5);
    [11, 12, 13, 14, 15].forEach(elem => queueStk.enqueue(elem));
    expect(queueStk.count()).toBe(5);
    queueStk.dequeue();
    expect(queueStk.count()).toBe(4);
    queueStk.dequeue();
    expect(queueStk.count()).toBe(3);
    queueStk.dequeue();
    expect(queueStk.count()).toBe(2);
    queueStk.dequeue();
    expect(queueStk.count()).toBe(1);
    queueStk.dequeue();
    expect(queueStk.count()).toBe(0);
});

test('Queue size should be not exceed maximum capacity when try to add any element after reaching maximum capacity', () => {
    var queueStk = new QueueStk(5);
    [11, 12, 13, 14, 15].forEach(element => queueStk.enqueue(element));
    expect((queueStk.count())).toBe(5);
    queueStk.enqueue(16);
    expect(queueStk.count()).toBe(5);
});

test('dequeue() should return the first element added', () => {
    var queueStk = new QueueStk(5);
    [11, 12, 13, 14].forEach(elem => queueStk.enqueue(elem));
    expect(queueStk.dequeue()).toBe(11);
});

test('peek() should return the first element added', () => {
    var queueStk = new QueueStk(5);
    [11, 12, 13, 14].forEach(elem => queueStk.enqueue(elem));
    expect(queueStk.peek()).toBe(11);
});

test('peek() should return the second element added after dequeue() is called once', () => {
    var queueStk = new QueueStk(5);
    [11, 12, 13, 14].forEach(elem => queueStk.enqueue(elem));
    queueStk.dequeue();
    expect(queueStk.peek()).toBe(12);
});

