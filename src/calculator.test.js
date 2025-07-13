import calculator from "./calculator";

//add function tests
test("adds 1 + 1 to equal 2", () => {
    expect(calculator.add(1, 1)).toBe(2);
});

test("adds 0 + 0 to equal 0", () => {
    expect(calculator.add(0, 0)).toBe(0);
});

test("testing with negative numbers", () => {
    expect(calculator.add(-1, -1)).toBe(-2);
});

test("testing with one negative number and one positive", () => {
    expect(calculator.add(-1, 1)).toBe(0);
});

//substract function tests
test("substract 2 - 1 to equal 1", () => {
    expect(calculator.substract(2, 1)).toBe(1);
});

test("substract 1 - 2 to equal -1", () => {
    expect(calculator.substract(1, 2)).toBe(-1);
});

test("substract -2 - -1 to equal -1", () => {
    expect(calculator.substract(-2, -1)).toBe(-1);
});

test("substract -2 - 1 to equal -3", () => {
    expect(calculator.substract(-2, 1)).toBe(-3);
});

//multiply function tests
test("multiply 1 * 1 to equal 1", () => {
    expect(calculator.multiply(1, 1)).toBe(1);
});

test("multiplying by 0 to equal 0", () => {
    expect(calculator.multiply(1, 0)).toBe(0);
});

test("multiplying two negative numbers to equal a positive number", () => {
    expect(calculator.multiply(-1, -1)).toBe(1);
});

test("multiply a negative number by positive number to be a negative number", () => {
    expect(calculator.multiply(-1, 1)).toBe(-1);
});

//division function tests
test("divide 4 / 2 to equal 2", () => {
    expect(calculator.divide(4, 2)).toBe(2);
})

test("dividing by 0 should be an error", () => {
    expect(calculator.divide(4, 0)).toBe("error");
})