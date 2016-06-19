var _parser;
exports.new = function (parser) {
    _parser = parser;
    return this;
}

exports.add = function (expression) {
    var result = 0;
    var negativeNumbers = [];
    if (expression) {
        var numbersToSum = _parser.parse(expression);
        for (number of numbersToSum) {
            if (number < 0) {
                negativeNumbers.push(number);
            }
            result += parseInt(number);
        }
        handleNegativeNumbers(negativeNumbers);
    }
    return result;
}
var NEGATIVE_NUMBER_ERORR_MESSAGE = "negatives not allowed: ";

var handleNegativeNumbers = function (negativeNumbers) {
    if (negativeNumbers.length > 0) {
        throw new Error(NEGATIVE_NUMBER_ERORR_MESSAGE + negativeNumbers.join(", "));
    };
}