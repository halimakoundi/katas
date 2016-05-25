exports.calculateScore = function (game) {
    var rolls = game.toRolls();
    return rolls.sum();
}

String.prototype.toRolls = function () {
    var obj = [];
    this.split('|').forEach(function (frame) {
        obj.push({
            "firstRollScore": rollScore(frame, 0),
            "secondRollScore": rollScore(frame, 1)
        });
    });
    return obj;
}

var rollScore = function(frame, rollIndex) {
    if (frame[rollIndex] == 'X') {
        return 10;
    }
    if (frame[rollIndex] == '/') {
        return (10 - rollScore(frame, rollIndex - 1));
    }
    if (frame.length < 2 && rollIndex == 1) {
        return 0;
    }
    return frame[rollIndex] == '-' ? 0 : parseInt(frame[rollIndex]);
}

Array.prototype.sum = function () {
    var total = 0;
    for (frameIndex = 0; frameIndex < this.length; frameIndex ++) {
        frameResults = this[frameIndex];
        var totalFrameScore = frameResults.firstRollScore + frameResults.secondRollScore;
        if (totalFrameScore == 10) {
            var nextFrameResults = this[frameIndex + 1];
            totalFrameScore += nextFrameResults.firstRollScore;
            if (frameResults.secondRollScore == 0) {
                totalFrameScore += nextFrameResults.secondRollScore;
            }
        }
        total += totalFrameScore;
    }
    return total;
}