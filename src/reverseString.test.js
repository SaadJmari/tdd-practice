import reverseString from "./reverseString.js"

test("reverse a string", () => {
    expect(reverseString("word")).toBe("drow");
});

test("reverse a letter", () => {
    expect(reverseString("a")).toBe("a");
});

test("reverse an empty string", () => {
    expect(reverseString("")).toBe("");
});

test("reverse a string with white space", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("reverse a string with punctuation", () => {
    expect(reverseString("word!")).toBe("!drow");
});

test("reverse a string with numbers", () => {
    expect(reverseString("word123")).toBe("321drow");
});