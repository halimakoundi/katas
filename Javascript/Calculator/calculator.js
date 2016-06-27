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
    if (expression) {
        var numbersToSum = this._parser.extractNumbersToSum(expression);
        for (number of numbersToSum) {
            if (number < 0) {
                handleNegativeNumbers(numbersToSum);
            }
            if (isBelowThreshold(number)) {
                result += number;
            }
        }
    }
    return result;
}

var result = function (numbersToSum) {
    var sum = 0;
    var numbersToSum = numbersToSum;

    var sumAllNumbers = function () {
        handleNegativeNumbers(numbersToSum);
        for (number of numbersToSum) {
            if (isBelowThreshold(number)) {
                sum += number;
            }
        }
    }

    this.getSum = function() {
        return sum;
    }

    return this;
}

var handleNegativeNumbers = function (numbersToSum) {
    var negativeNumbers = numbersToSum.filter(function (n) { return n < 0 });
    if (negativeNumbers.length > 0) {
        throw new Error(NEGATIVE_NUMBER_ERORR_MESSAGE + negativeNumbers.join(", "));
    };
}

var isBelowThreshold = function (number) {
    return number < maxAddedNumber;
}
