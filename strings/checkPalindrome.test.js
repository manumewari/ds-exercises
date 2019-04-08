const checkPalindrome = require("./checkPalindrome");

test("check if null value is passed, checkPalindrome() should return false", () => {
    let testPalindrome = checkPalindrome(null);
    expect(testPalindrome).toBeFalsy();
});

test("check if single character is passed, checkPalindrome() should return true", () => {
    let testString = "a";
    let testPalindrome = checkPalindrome(testString);
    expect(testPalindrome).toBeTruthy();
});

test("check if 2 same characters are passed, checkPalindrome() should return true", () => {
    let testString = "aa";
    let testPalindrome = checkPalindrome(testString);
    expect(testPalindrome).toBeTruthy();
});

test("check if 2 different characters are passed, checkPalindrome() should return false", () => {
    let testString = "ab";
    let testPalindrome = checkPalindrome(testString);
    expect(testPalindrome).toBeFalsy();
});

test("check if palindrome string is passed, checkPalindrome() should return true", () => {
    let testString = "abcdefgfedcba";
    let testPalindrome = checkPalindrome(testString);
    expect(testPalindrome).toBeTruthy();
});

test("check if non palindrome string is passed, checkPalindrome() should return false", () => {
    let testString = "abcdefkgfedcba";
    let testPalindrome = checkPalindrome(testString);
    expect(testPalindrome).toBeFalsy();
});


