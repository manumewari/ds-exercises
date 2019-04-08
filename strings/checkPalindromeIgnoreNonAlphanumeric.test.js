const isPalindrome = require("./checkPalindromeIgnoreNonAlphanumeric");

test("check if null value is passed, checkPalindrome() should return false", () => {
    let testPalindrome = isPalindrome(null);
    expect(testPalindrome).toBeFalsy();
});

test("check if single character is passed, checkPalindrome() should return true", () => {
    let testString = "a";
    let testPalindrome = isPalindrome(testString);
    expect(testPalindrome).toBeTruthy();
});

test("check if 2 same characters are passed, checkPalindrome() should return true", () => {
    let testString = "aa";
    let testPalindrome = isPalindrome(testString);
    expect(testPalindrome).toBeTruthy();
});

test("check if 2 different characters are passed, checkPalindrome() should return false", () => {
    let testString = "ab";
    let testPalindrome = isPalindrome(testString);
    expect(testPalindrome).toBeFalsy();
});

test("check if palindrome string is passed, checkPalindrome() should return true", () => {
    let testString = "abcdefgfedcba";
    let testPalindrome = isPalindrome(testString);
    expect(testPalindrome).toBeTruthy();
});

test("check if non palindrome string is passed, checkPalindrome() should return false", () => {
    let testString = "abcdefkgfedcba";
    let testPalindrome = isPalindrome(testString);
    expect(testPalindrome).toBeFalsy();
});

test("check if non palindrome string is passed, checkPalindrome() should return true after ignoring non alpha numeric chars", () => {
    let testString = "A man, a plan, a canal: Panama";
    let testPalindrome = isPalindrome(testString);
    expect(testPalindrome).toBeTruthy();
});

test("check if non palindrome string is passed, checkPalindrome() should return false", () => {
    let testString = "race a car";
    let testPalindrome = isPalindrome(testString);
    expect(testPalindrome).toBeFalsy();
});

