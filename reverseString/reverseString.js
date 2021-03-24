const reverseString = function(string) {
    let result = [];
    let stringArray = string.split('');
    
    for (let i = 0; i < string.length; i++) {
        // build new array with elements reversed
        result.unshift(stringArray[i]);
    }

    return result.join('');
}

module.exports = reverseString
