exports.new = function () {
    this.parse = parse;
    return this;
}

var newLine = "\n";
var defaultDelimiter = ",";

var parse = function (expression) {
    var expressions = expression.split("\n");
    var delimiters = [];
    var delimiterDefiner = "//";
    if (expressions.length > 1 && expression.indexOf(delimiterDefiner) > -1) {
        if (expressions[0].indexOf('[]') > -1) {
            delimiters.push('');
            expression = expressions[1].replace('***', '');
        } else {
            delimiters.push(expressions[0].replace(delimiterDefiner, ""));
            expression = expressions[1];
        }
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
        expression = expression.split(delimiter).join(defaultDelimiter);
    }
    expression = expression.replace(newLine, defaultDelimiter);
    return expression;
}
