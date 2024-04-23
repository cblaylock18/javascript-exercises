const palindromes = function (string) {
    let reverseString = "";
    let rawString = string
        .toUpperCase()
        .replace(/[^\p{L}\p{N}\s]/gu, "")
        .replaceAll(" ", "");

    for (let i = 0; i < rawString.length; i++) {
        reverseString += rawString.slice(
            rawString.length - i - 1,
            rawString.length - i
        );
    }
    console.log(rawString);
    console.log(reverseString);
    return rawString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
