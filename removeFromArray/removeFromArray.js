const removeFromArray = function() {
    let arrayOriginal = arguments[0];
    let arrayFinal = [];
    let arrayToRemove = [...arguments]
    arrayToRemove.shift();
    for (let i = 0; i < arrayOriginal.length; i++) {
        if (!arrayToRemove.includes(arrayOriginal[i])) {
            arrayFinal.push(arrayOriginal[i]);
        }
    }
    return arrayFinal;
}

module.exports = removeFromArray
