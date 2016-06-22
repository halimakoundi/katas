exports.new = function () {
    this.extractNumbersToSum = extractNumbersToSum;
    return this;
}

var newLine = "\n";
var delimiterDefiner = "//";
var specialDelimiter = '***';
var delimiterDefinerRegex = /^.*\[(.*?)].*/g;

var extractNumbersToSum = function (expression) {
    var arithmeticExpression = new ArithmeticExpression(expression);
    return arithmeticExpression.numbersToSum();
}

var ArithmeticExpression = function (expression) {
    var defaultDelimiter = ",";
    var expressions = expression.split(newLine);
    var delimiters = [];
    var numbersAsString = expression;

    if (isDelimiterDefinedInExpression(expressions)) {
        delimiters = getDelimitersFrom(expressions[0]);
        numbersAsString = expressions[1].replace(specialDelimiter, '');
    }

    delimiters = delimiters.concat(findAdditionalDelimiters(expression));

    numbersAsString = replaceDelimitersinExpressionWithDefaultDelimiter(numbersAsString, delimiters, defaultDelimiter);

    this.numbersToSum = function () {
        var parameters = numbersAsString.split(defaultDelimiter)
            .filter(function (n) { return n != '' })
            .map(item => { return parseInt(item); });
        return parameters;
    };

    return this;
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

var findAdditionalDelimiters = function (expression) {
    var additionalDelimiters = [];
    for (element of expression) {
        if (isNaN(element) && element != '-') {
            additionalDelimiters.push(element);
        }
    }
    return additionalDelimiters;
}

var replaceDelimitersinExpressionWithDefaultDelimiter = function (expression, delimiters, defaultDelimiter) {
    var newExpression = expression;
    for (delimiter of delimiters) {
        newExpression = newExpression.split(delimiter).join(defaultDelimiter);
    }
    newExpression = newExpression.replace(newLine, defaultDelimiter);
    return newExpression;
}
