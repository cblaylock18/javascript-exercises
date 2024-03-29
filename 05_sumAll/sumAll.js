const sumAll = function (firstNumber, secondNumber) {
    let smallNumber =
        firstNumber < 0 ||
        typeof firstNumber !== "number" ||
        typeof secondNumber !== "number"
            ? "ERROR"
            : firstNumber <= secondNumber
            ? firstNumber
            : firstNumber > secondNumber
            ? secondNumber
            : "ERROR";
    if (smallNumber === "ERROR") {
        return smallNumber;
    }
    let largeNumber = smallNumber === firstNumber ? secondNumber : firstNumber;
    let numberSum = 0;
    while (smallNumber <= largeNumber) {
        numberSum += smallNumber;

        smallNumber++;
    }
    return numberSum;
};

// Do not edit below this line
module.exports = sumAll;
