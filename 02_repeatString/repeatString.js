const repeatString = function (string, n) {
    let repeatedString = "";

    for (i = 1; i <= n; i++) {
        repeatedString += string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
