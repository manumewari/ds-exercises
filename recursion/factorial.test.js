
const factorial = require("./factorial");

test("factorial of 1 should be 1", () => {
    expect(factorial(1)).toBe(1);
});

test("factorial of 2 should be 2", () => {
    expect(factorial(2)).toBe(2);
});

test("factorial of 3 should be 6", () => {
    expect(factorial(3)).toBe(6);
});

test("factorial of 4 should be 24", () => {
    expect(factorial(4)).toBe(24);
});

