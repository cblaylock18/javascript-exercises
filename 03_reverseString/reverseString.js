const reverseString = function (forwardString) {
    let reversedString = "";
    for (let i = forwardString.length; i >= 0; i--) {
        reversedString += forwardString.slice(i - 1, i);
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
