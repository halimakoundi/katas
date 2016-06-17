exports.add = function (addendum) {
    var result = 0;
    if (addendum) {
        var numbers = addendum.split(",");
        for (number of numbers) {
            result += parseInt(number);
        };
    }
    return result;
}