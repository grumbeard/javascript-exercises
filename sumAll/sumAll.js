const sumAll = function(num1, num2) {
    // For every number between and including num1 and num2, add to a running sum
    let result = 0;
    // Check if positive number
    if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    }
    // Check if integer
    if (typeof num1 != "number" || typeof num2 != "number") {
        return 'ERROR'
    }
    // Check if num1 larger than num2 and reverse values if true
    if (num1 > num2) {
        let numTemp = num2;
        num2 = num1;
        num1 = numTemp;
    }
    // Sum numbers from num1 to num2
    for (let i = num1; i <= num2; i++) {
        result += i;
    }
    return result;
}

module.exports = sumAll
