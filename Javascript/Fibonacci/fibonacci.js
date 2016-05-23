exports.generateSequence = function (length) {
    if (length == 1) {
        return [0];
    }
    if (length == 2) {
        return [0, 1];
    }
    return [];
}