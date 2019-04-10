const flatten = require("./flatten");

test("for an already flatten array, input should be equal to output", () => {
    const arr = [1, 2, 3, 4];
    const flattenArray = flatten(arr);
    expect(flattenArray).toEqual(arr);
});

test("for a array with array inside arrays, output should be equal to [1,2,3,4]", () => {
    const arr = [1, [2], [3], [4]];
    const flattenArray = flatten(arr);
    expect(flattenArray).toEqual([1,2,3,4]);
});

test("for a array with array inside arrays, output should be equal to [1,2,3,4]", () => {
    const arr = [1, [[2], [3]], [4]];
    const flattenArray = flatten(arr);
    expect(flattenArray).toEqual([1,2,3,4]);
});

test("for a array with array inside arrays, output should be equal to [1,2,3,4]", () => {
    const arr = [[1, [[2], [[3]]], [[4]]]];
    const flattenArray = flatten(arr);
    expect(flattenArray).toEqual([1,2,3,4]);
});
