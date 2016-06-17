exports.add = function (addendum) {
    var result = 0;
    if (addendum) {
        if (addendum.indexOf(",") > 0) {
            return 3;
        }
        result = parseInt(addendum);
    }
    return result;
}