const leapYears = function(year) {
    // Check if given year is multiple of 4
    if (year % 4 === 0) {
        // Check if given year is multiple of 100
        if (year % 100 === 0) {
            // Check if given year is multiple of 400
            if (year % 400 === 0) {
                return true
            }
            return false
        }
        return true
    }
    return false
}

module.exports = leapYears
