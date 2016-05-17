exports.isLeapYear = function (year)
{
    if (  (isDivisibleBy4(year) && !isDivisibleBy100(year))
        || isDivisibleBy400(year))
    {
        return true;
    }
    return false;
}

function isDivisibleBy4(year)
{
    return year % 4 == 0;
}
function isDivisibleBy400(year)
{
    return year % 400 == 0;
}
function isDivisibleBy100(year)
{
    return year % 100 == 0;
}