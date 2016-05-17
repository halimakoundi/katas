exports.isLeapYear = function (year)
{
    if ((year.isDivisibleBy(4) && !year.isDivisibleBy(100))
        || year.isDivisibleBy(400))
    {
        return true;
    }
    return false;
}

Number.prototype.isDivisibleBy = function (denominator) {
    return this % denominator == 0;
}