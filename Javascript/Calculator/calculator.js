exports.add = function (addendum) {
    var result = 0;
    if (addendum) {
        addendum = addendum.replace("\n", ",");
        addendum = addendum.replace("|", ",");
        addendum = addendum.replace("#", ",");
        var numbers = addendum.split(",");
        for (number of numbers) {
            result += parseInt(number);
        };
    }
    return result;
}