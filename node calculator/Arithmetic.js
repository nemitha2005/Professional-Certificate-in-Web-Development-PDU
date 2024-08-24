const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : "Error: Division by zero");

module.exports = { 
    add, 
    subtract, 
    multiply, 
    divide 
};
