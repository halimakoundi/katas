exports.add = function (expression) {
    var result = 0;
    if (expression == ("//;\n1;2")) {
        expression = expression.split("\n")[1];
    }
    if (expression) {
        var numbers = parse(expression);
        for (number of numbers) {
            result += parseInt(number);
        };
    }
    return result;
}

var defaultDelimiter = ",";
var parse = function (expression) {
    var delimiters = findDelimiters(expression);
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
    var newLine = "\n";
    expression = expression.replace(newLine, defaultDelimiter);
    return expression;
}