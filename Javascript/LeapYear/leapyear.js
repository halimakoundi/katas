exports.isLeapYear = function (year) {
    if (year % 4 == 0) {
        return true;
    }
    return false;
}