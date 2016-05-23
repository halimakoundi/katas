exports.generateSequence = function (length) {
    var sequence = [];
    if (length == 1) {
        sequence.push(0);
    }
    if (length == 2) {
        sequence.push(0);
        sequence.push(1);
    }
    if (length == 3) {
        sequence.push(0);
        sequence.push(1);
        sequence.push(1);
    }
    if (length == 4) {
        sequence.push(0);
        sequence.push(1);
        sequence.push(1);
        sequence.push(2);
    }
    return sequence;
}