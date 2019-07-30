const insertionSort = require("./insertionSort");

test("sorting an array with single element should return same array without any change", () => {
    expect(insertionSort([1])).toEqual([1]);
});

test("sorting an array with 2 already sorted elements should return same array", () => {
    expect(insertionSort([1, 2])).toEqual([1, 2]);
});

test("sorting an array with 2 unsorted elements should return array with sorted elements", () => {
    expect(insertionSort([2, 1])).toEqual([1, 2]);
});

test("sorting an array with 5 unsorted elements should return array with sorted elements", () => {
    expect(insertionSort([9, 7, 2, 1, 5])).toEqual([1, 2, 5, 7, 9]);
});

test("sorting an array with 10 unsorted elements should return array with sorted elements", () => {
    expect(insertionSort([22, 13, 2, 17, 25, 1, 7, 11, 8, 6])).toEqual([1, 2, 6, 7, 8, 11, 13, 17, 22, 25]);
});

test("sorting an array with 10 unsorted elements with some repeated values should return array with sorted elements", () => {
    expect(insertionSort([1, 22, 6, 7, 8, 11, 13, 11, 22, 25])).toEqual([1, 6, 7, 8, 11, 11, 13, 22, 22, 25]);
});

