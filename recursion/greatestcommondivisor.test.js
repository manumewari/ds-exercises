const greatestcommondivisor = require("./greatestcommondivisor");

test("greatest common divisor of 6, 9 should be 3", () => {
    expect(greatestcommondivisor(6, 9)).toBe(3);
});

test("greatest common divisor of 20, 25 should be 5", () => {
    expect(greatestcommondivisor(20, 25)).toBe(5);
});

test("greatest common divisor of 28, 29 should be 3", () => {
    expect(greatestcommondivisor(28, 29)).toBe(1);
});

test("greatest common divisor of 21, 28 should be 7", () => {
    expect(greatestcommondivisor(21, 28)).toBe(7);
});

test("greatest common divisor of 27, 81 should be 9", () => {
    expect(greatestcommondivisor(27, 81)).toBe(27);
});

