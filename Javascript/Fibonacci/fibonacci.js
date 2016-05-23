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
        sequence.push(0);
        sequence.push(1);
        for (i = 0; i < length - 2; i++) {
            sequence.push(sequence[i] + sequence[i + 1]);
        }
    }
    return sequence;
}