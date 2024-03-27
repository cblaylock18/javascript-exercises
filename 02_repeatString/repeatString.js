const repeatString = function (string, n) {
    let repeatedString = "";

    if (n < 0) {
        return "ERROR";
    } else {
        for (i = 1; i <= n; i++) {
            repeatedString += string;
        }
        console.log(repeatedString);
        return repeatedString;
    }
};

// Do not edit below this line
module.exports = repeatString;
