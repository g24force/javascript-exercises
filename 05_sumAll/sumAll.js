const sumAll = function(num1, num2) {
    let finalSum = 0;
    if (Number.isInteger(num1) && Number.isInteger(num2) && num1 >= 0 && num2 >= 0) {
        if (num2 > num1) {
            for (i = num1; i <= num2; i++) {
                finalSum += i;
            }
        } else if (num1 > num2) {
            for (i = num2; i <= num1; i++) {
                finalSum += i;
        }}
        return finalSum;
    } else {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;
