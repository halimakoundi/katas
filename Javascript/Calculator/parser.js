exports.new = function () {
    this.parse = parse;
    return this;
}

var newLine = "\n";
var defaultDelimiter = ",";
var delimiterDefiner = "//";
var specialDelimiter = '***';

var parse = function (expression) {
    var expressions = expression.split("\n");
    var delimiters = [];
    if (expressions.length > 1 && expression.indexOf(delimiterDefiner) > -1) {
        setDelimiters(expressions[0], delimiters);
        expression = expressions[1].replace(specialDelimiter, '');
    } else {
        delimiters = findDelimiters(expression);
    }
    expression = replaceDelimiters(expression, delimiters);
    var parameters = expression.split(defaultDelimiter);
    return parameters;
}

var setDelimiters = function(delimitingExpression, delimiters)
{
    if (delimitingExpression.indexOf('[]') > -1) {
        delimiters.push('');
    } else {
        delimiters.push(delimitingExpression.replace(delimiterDefiner, ""));
    }
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
