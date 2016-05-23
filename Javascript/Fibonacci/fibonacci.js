exports.generateSequence = function (length) {
    var sequence = [];
    if (length == 1) {
        sequence.push(0);
    }
    if (length == 2) {
        sequence.push(0);
        sequence.push(1);
    }
    if (length > 2) {
        sequence = this.generateSequence(length - 1);
        sequence.push(sequence[length - 3] + sequence[length - 2]);
    }
    return sequence;
}