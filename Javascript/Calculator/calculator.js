var NEGATIVE_NUMBER_ERORR_MESSAGE = "negatives not allowed: ";
var _parser;
var maxAddedNumber = 1000;

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
            if (number < maxAddedNumber) {
                result += number;
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