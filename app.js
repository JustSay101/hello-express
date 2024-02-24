const express = require('express');
const app = express();
const PORT = 3000;

// GET endpoint - http://127.0.0.1:3000/
app.get('/', (request, response) => {
    response.send('Here comes dat boi');
});

/**
 * Multiplies param a with param b
 * @param {number} a multiplicant
 * @param {number} b multiplier
 * @returns {number} product
 */
const multiply = (a, b) => {
    return a * b;
};

// GET multiply endpoint - http://127.0.0.1:3000/multiply?a=3&b=2
app.get('/multiply', (request, response) => {
    try {
        const a = parseFloat(request.query.a);
        const b = parseFloat(request.query.b);
        
        if (isNaN(a) || isNaN(b)) {
            throw 'Shit is number LOL :DDD';
        }
        
        const c = multiply(a, b);
        console.log({ a: a, b: b, c: c });
        response.send('Am not ready, go to Arstotzka');
    } catch (e) {
        console.log(e);
        response.send(`Encountered error: ${e}`);
    }
});

app.listen(PORT, () => {
    console.log(`Am listening to: http://127.0.0.1:${PORT} :^)`);
});

// JS kaka >:^( TS Hyva :^)