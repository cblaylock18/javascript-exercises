const fibonacci = function (number) {
    fibonacciSequence = [0, 1, 1];
    if (number <= 2 && number >= 0) {
        return fibonacciSequence[number];
    } else if (number > 2) {
        for (let i = 2; i <= number; i++) {
            fibonacciSequence.push(
                fibonacciSequence[i] + fibonacciSequence[i - 1]
            );
        }
        return fibonacciSequence[number];
    } else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
