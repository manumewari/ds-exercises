const reverseString = require("./reverseString");

test("if blank string is passed, output should be blank string", () => {
    expect(reverseString("")).toBe("");
});

test("if abcdefg string is passed, output should be gfedcba", () => {
    expect(reverseString("abcdefg")).toBe("gfedcba");
});

test("if 01234567 string is passed, output should be 76543210", () => {
    expect(reverseString("01234567")).toBe("76543210");
});

