const recursiveExponent = require("./recursiveExponent");

test("if value=2, exponent=2 is passed to function, it should return 4", () => {
    expect(recursiveExponent(2, 2)).toBe(4);
});

test("if value=3, exponent=2 is passed to function, it should return 9", () => {
    expect(recursiveExponent(3, 2)).toBe(9);
});

test("if value=1, exponent=3 is passed to function, it should return 1", () => {
    expect(recursiveExponent(1, 3)).toBe(1);
});

test("if value=9, exponent=4 is passed to function, it should return 6561", () => {
    expect(recursiveExponent(9, 4)).toBe(6561);
});

