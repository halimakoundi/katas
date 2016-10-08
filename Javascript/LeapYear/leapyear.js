exports.isLeapYear = function (year) {

    return    (year.isDivisibleBy(4) && !year.isDivisibleBy(100))
            || year.isDivisibleBy(400);
}

Number.prototype.isDivisibleBy = function (denominator) {
    return this % denominator == 0;
}