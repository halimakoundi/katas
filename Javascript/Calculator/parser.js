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
    if (isDelimiterDefinedInExpression(expressions)) {
        delimiters = getDelimitersFrom(expressions[0]);
        expression = expressions[1].replace(specialDelimiter, '');
    }
    findDelimiters(expression, delimiters);

    expression = replaceDelimiters(expression, delimiters);
    var parameters = expression.split(defaultDelimiter)
                               .filter(function (n) { return n != '' })
                               .map(item => { return parseInt(item); });;
    return parameters;
}
var getDelimitersFrom = function (delimitingExpression) {
    var delimiters = [];
    if (delimitingExpression.search(delimiterDefinerRegex) > -1) {
        var definedDelimiters = delimitingExpression.split("]");
        for (definedDelimiter of definedDelimiters) {
            delimiters.push(definedDelimiter.replace("[", ""));
        }
    }
    return delimiters;
}

var isDelimiterDefinedInExpression = function (expressions) {
    return expressions.length > 1
            && expressions[0].indexOf(delimiterDefiner) > -1;
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
