const removeFromArray = function (userArray, ...filterValues) {
    let i = userArray.length - 1;
    while (i >= 0) {
        for (let j = 0; j < filterValues.length; j++) {
            if (userArray[i] === filterValues[j]) {
                userArray.splice(i, 1);
            }
        }
        i--;
    }
    return userArray;
};

// Do not edit below this line
module.exports = removeFromArray;
