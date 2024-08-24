const express = require('express');
const app = express();
const port = 3500;

// Middleware to parse JSON bodies
app.use(express.json());

// Import arithmetic functions
const { add, subtract, multiply, divide } = require('./Arithmetic');

// Routes
app.get('/', (req, res) => {
    res.send('Simple Calculator API');
});

app.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;

    let result;

    switch (operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        default:
            return res.status(400).send('Invalid operation');
    }

    res.json({ result });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
