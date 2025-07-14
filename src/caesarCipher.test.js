import caesarCipher from './caesarCipher.js'

test("testing by shifting by 1", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("testing wrapping from z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("testing uppercase", () => {
    expect(caesarCipher("XYZ", 3)).toBe("ABC");
});

test("testing symbols", () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test("testing with 0 shift", () => {
    expect(caesarCipher("abc", 0)).toBe("abc");
});

test("testing with 26 shifts", () => {
    expect(caesarCipher("abc", 26)).toBe("abc");
});