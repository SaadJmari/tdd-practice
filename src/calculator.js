let calculator = {
    add: (a, b) => { return a + b; },
    substract: (a, b) => { return a - b; },
    multiply: (a, b) => { return a * b },
    divide: (a, b) => { return b !== 0 ? a / b : "error" }
};

export default calculator;