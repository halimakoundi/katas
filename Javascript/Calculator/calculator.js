exports.add = function (addendum) {
    var result = 0;
    if (addendum) {
        var numbers = addendum.split(",");
        if (numbers.length > 1) {
            return parseInt(numbers[0]) + parseInt(numbers[1]);
        }
        result = parseInt(addendum);
    }
    return result;
}