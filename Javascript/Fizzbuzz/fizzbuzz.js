exports.returnValue = function (value) {
    if (isFizz(value) && isBuzz(value)) {
        return "FizzBuzz";
    }
    if (isFizz(value)) {
        return "Fizz";
    }
    if (isBuzz(value)) {
        return "Buzz";
    }
    return value;
}
function isFizz(value) {
    return value % 3 == 0;
}
function isBuzz(value) {
    return value % 5 == 0;
}