exports.add = function (expression) {
    var result = 0;
    var negativeNumbers = [];
    if (expression) {
        var numbersToSum = new Parser().parse(expression);
        for (number of numbersToSum) {
            if (number < 0) {
                negativeNumbers.push(number);
            }
            result += parseInt(number);
        }
        if (negativeNumbers.length > 0) {
            throw new Error(NEGATIVE_NUMBER_ERORR_MESSAGE    + negativeNumbers.join(", "));
        };
    }
    return result;
}
var NEGATIVE_NUMBER_ERORR_MESSAGE = "negatives not allowed: ";
var newLine = "\n";
var defaultDelimiter = ",";

var Parser = function() {
    this.parse = parse;
    this.findDelimiters = findDelimiters;
    this.replaceDelimiters = replaceDelimiters;

}

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
        expression = expression.split(delimiter).join(defaultDelimiter);
    }
    expression = expression.replace(newLine, defaultDelimiter);
    return expression;
}