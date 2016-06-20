var NEGATIVE_NUMBER_ERORR_MESSAGE = "negatives not allowed: ";
var _parser;
exports.new = function (parser) {
    this._parser = parser;
    this.add = add;

    return this;
}

var add = function (expression) {
    var result = 0;
    var negativeNumbers = [];
    if (expression) {
        var numbersToSum = this._parser.parse(expression);
        for (number of numbersToSum) {
            if (number < 0) {
                negativeNumbers.push(number);
            }
            if (number < 1000) {
                result += parseInt(number);
            }
        }
        handleNegativeNumbers(negativeNumbers);
    }
    return result;
}

var handleNegativeNumbers = function (negativeNumbers) {
    if (negativeNumbers.length > 0) {
        throw new Error(NEGATIVE_NUMBER_ERORR_MESSAGE + negativeNumbers.join(", "));
    };
}