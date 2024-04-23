const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (numbers) {
    let total = numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
    return total;
};

const multiply = function (numbers) {
    return numbers.reduce(
        (accumulator, currentValue) => accumulator * currentValue,
        1
    );
};

const power = function (a, b) {
    let currentValue = 1;
    for (let i = 1; i <= b; i++) {
        currentValue *= a;
    }
    return currentValue;
};

const factorial = function (a) {
    let currentValue = 1;
    let i = 1;
    do {
        currentValue *= i;
        i++;
        console.log(currentValue);
    } while (i <= a);
    return currentValue;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
