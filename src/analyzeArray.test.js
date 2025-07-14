import analyzeArray from "./analyzeArray.js";

const arr = [1, 8, 3, 4, 2, 6];

test("test with an actual array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test("test with an empty array", () => {
    expect(analyzeArray([])).toStrictEqual({ average: NaN, min: undefined, max: undefined, length: 0 });
});

test("test with an array with identical numbers", () => {
    expect(analyzeArray([2, 2, 2])).toStrictEqual({ average: 2, min: 2, max: 2, length: 3 });
});

test("test with an array with one number", () => {
    expect(analyzeArray([2])).toStrictEqual({ average: 2, min: 2, max: 2, length: 1 });
});