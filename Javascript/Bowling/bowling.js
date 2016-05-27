var frames = [];
var bonusRolls = [];

exports.calculateScore = function (game) {
    var score = 0;
    var mainGame = game.split("||")[0];
    bonusRolls = game.split("||")[1];
    frames = mainGame.split("|");
    frames.forEach(function (frame, currentFrameIndex) {
        score += calculateFrameScore(frame, currentFrameIndex);
    });
    return score;
};

var calculateFrameScore = function (frame, currentFrameIndex) {
    var firstRollScore = rollScore(frame, 0);
    var secondRollScore = rollScore(frame, 1);

    frameScore = firstRollScore + secondRollScore;
    if (frameScore == 10) {
        var firstNextRollScore = 0;
        var nextFrameSecondRollScore = 0;
        var isLastFrame = currentFrameIndex == (frames.length - 1);
        if (isLastFrame) {
            firstNextRollScore = rollScore(bonusRolls, 0);
            nextFrameSecondRollScore = rollScore(bonusRolls, 1);
        } else {
            var nextFrame = frames[currentFrameIndex + 1];
            firstNextRollScore = rollScore(nextFrame, 0);
            nextFrameSecondRollScore = rollScore(nextFrame, 1);
        }
        frameScore += firstNextRollScore;
        var frameIsStrike = secondRollScore == 0;
        if (frameIsStrike) {
            frameScore += nextFrameSecondRollScore;
        }
    }
    return frameScore;
}

var rollScore = function (frame, rollIndex) {
    rollResult = frame[rollIndex];
    if (rollResult == "X") {
        return 10;
    }
    if (rollResult == "-" || !rollResult) {
        return 0;
    }
    if (rollResult == "/") {
        var previousRollScore = rollScore(frame, rollIndex - 1);
        return 10 - previousRollScore;
    }
    return parseInt(rollResult);
}