exports.calculateScore = function (game) {
    var score = 0;
    var mainGame = game.split("||")[0];
    var bonusRolls = game.split("||")[1];
    var frames = mainGame.split("|");
    frames.forEach(function (frame, currentFrameIndex) {
        var firstRollScore = rollScore(frame, 0);
        var secondRollScore = rollScore(frame, 1);

        frameScore = firstRollScore + secondRollScore;
        if (frameScore == 10) {
            var nextFrameFirstRollScore = 0;
            var isLastFrame = currentFrameIndex == (frames.length - 1);
            if (isLastFrame) {
                nextFrameFirstRollScore = rollScore(bonusRolls, 0);
            } else {
                var nextFrame = frames[currentFrameIndex + 1];
                nextFrameFirstRollScore = rollScore(nextFrame, 0);
            }
            frameScore += nextFrameFirstRollScore;
            if (secondRollScore == 0) {
                var nextFrameSecondRollScore = rollScore(nextFrame, 1);
                frameScore += nextFrameSecondRollScore;
            }
        }
        score += frameScore;
    });
    return score;
};

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