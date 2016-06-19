exports.add = function (expression) {
    var result = 0;
    if (expression) {
        var numbers = parse(expression);
        for (number of numbers) {
            result += parseInt(number);
        };
    }
    return result;
}
var newLine = "\n";
var defaultDelimiter = ",";

var parse = function (expression) {
    var expressions = expression.split("\n");
    var delimiters = [];
    var delimiterDefiner = "//";
    if (expressions.length > 1 && expression.indexOf(delimiterDefiner) > -1) {
        delimiters.push(expressions[0].replace(delimiterDefiner, ""));
        expression = expressions[1];
    } else {
        delimiters = findDelimiters(expression);
    }
    expression = replaceDelimiters(expression, delimiters);
    var parameters = expression.split(defaultDelimiter);
    return parameters;
}

var findDelimiters = function (expression) {
    var delimiters = [];
    for (element of expression) {
        if (isNaN(element)) {
            delimiters.push(element);
        }
    }
    return delimiters;
}

var replaceDelimiters = function (expression, delimiters) {
    for (delimiter of delimiters) {
        expression = expression.replace(delimiter, defaultDelimiter);
    }
    expression = expression.replace(newLine, defaultDelimiter);
    return expression;
}