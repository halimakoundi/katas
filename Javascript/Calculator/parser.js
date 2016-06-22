exports.new = function () {
    this.extractNumbersToSum = extractNumbersToSum;
    return this;
}

var newLine = "\n";
var defaultDelimiter = ",";
var delimiterDefiner = "//";
var specialDelimiter = '***';
var delimiterDefinerRegex = /^.*\[(.*?)].*/g;

var extractNumbersToSum = function (expression) {
    var expressions = expression.split(newLine);
    var delimiters = [];
    var isDelimiterDefinedInExpression = expressions.length > 1
                                         && expression.indexOf(delimiterDefiner) > -1;
    if (isDelimiterDefinedInExpression) {
        setDelimiters(expressions[0], delimiters);
        expression = expressions[1].replace(specialDelimiter, '');
    }
    findDelimiters(expression, delimiters);

    expression = replaceDelimiters(expression, delimiters);
    var parameters = expression.split(defaultDelimiter)
                               .filter(function (n) { return n != '' })
                               .map(item => { return parseInt(item);});;
    return parameters;
}
var setDelimiters = function (delimitingExpression, delimiters) {
    if (delimitingExpression.search(delimiterDefinerRegex) > -1) {
        var definedDelimiters = delimitingExpression.split("]");
        for (definedDelimiter of definedDelimiters) {
            delimiters.push(definedDelimiter.replace("[",""));
        }
    }
}

var findDelimiters = function (expression, delimiters) {
    for (element of expression) {
        if (isNaN(element) && element != '-') {
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
