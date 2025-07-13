import capitalize from "./capitalize.js";

test('change a string into String', () => {
    expect(capitalize("word")).toBe("Word");
});

test('test with an already capitalized word', () => {
    expect(capitalize("Word")).toBe("Word");
});

test('test with an empty string', () => {
    expect(capitalize("")).toBe("");
});

test('test with a string with one character', () => {
    expect(capitalize("w")).toBe("W");
});

test('test with a string with numbers and symbols', () => {
    expect(capitalize("w1&ods")).toBe("W1&ods");
});

test('test with a string with numbers and symbols (part 2)', () => {
    expect(capitalize("1w1&ods")).toBe("Error");
});
