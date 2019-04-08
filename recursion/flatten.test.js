const flatten = require("./flatten");

test("for an already flatten array, input should be equal to output", () => {
    const arr = [1, 2, 3, 4];
    const flattenArray = flatten(arr);
    expect(flattenArray[0]).toBe(1);
    expect(flattenArray[1]).toBe(2);
    expect(flattenArray[2]).toBe(3);
    expect(flattenArray[3]).toBe(4);
});

test("for a array with array inside arrays, output should be equal to [1,2,3,4]", () => {
    const arr = [1, [2], [3], [4]];
    const flattenArray = flatten(arr);
    expect(flattenArray[0]).toBe(1);
    expect(flattenArray[1]).toBe(2);
    expect(flattenArray[2]).toBe(3);
    expect(flattenArray[3]).toBe(4);
});

test("for a array with array inside arrays, output should be equal to [1,2,3,4]", () => {
    const arr = [1, [[2], [3]], [4]];
    const flattenArray = flatten(arr);
    expect(flattenArray[0]).toBe(1);
    expect(flattenArray[1]).toBe(2);
    expect(flattenArray[2]).toBe(3);
    expect(flattenArray[3]).toBe(4);
});

test("for a array with array inside arrays, output should be equal to [1,2,3,4]", () => {
    const arr = [[1, [[2], [[3]]], [[4]]]];
    const flattenArray = flatten(arr);
    expect(flattenArray[0]).toBe(1);
    expect(flattenArray[1]).toBe(2);
    expect(flattenArray[2]).toBe(3);
    expect(flattenArray[3]).toBe(4);
});
