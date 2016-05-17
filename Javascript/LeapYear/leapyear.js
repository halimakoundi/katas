exports.isLeapYear = function (year) {
    if (year % 4 == 0 && !(year % 100 == 0)) {
        return true;
    }
    return false;
}