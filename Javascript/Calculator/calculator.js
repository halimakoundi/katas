var defaultDelimiter = ",";
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

var parse = function (expression) {
    var delimters = findDelimiters(expression);
    expression = replaceDelimiters(expression, delimiters);
    var parameters = expression.split(defaultDelimiter);
    return parameters;
}

var findDelimiters = function (expression) {
    var delimiters = [];
    for (element of expression) {
        if (isNaan(element)) {
            delimiters.push(element);
        }
    }
    return delimiters;
}

var replaceDelimiters = function(expression, delimiters) {
    for (delimiter of delimiters) {
       expression = expression.replace(delimiters, ",");
    }
    return expression;
}