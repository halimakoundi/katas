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

var calculateFrameScore = function (frameResults, currentFrameIndex) {
    var frame = new Frame(frameResults[0], frameResults[1], currentFrameIndex);
    
    if (frame.score == 10) {
        var firstNextRollScore = 0;
        var secondNextRollScore = 0;

        if (frame.isLastFrame(frames.length)) {
            firstNextRollScore = rollScore(bonusRolls, 0);
            secondNextRollScore = rollScore(bonusRolls, 1);
        } else {
            var nextFrame = new Frame(frames[currentFrameIndex + 1][0], frames[currentFrameIndex + 1][1], currentFrameIndex + 1);
            firstNextRollScore = nextFrame.firstRollScore;

            if (nextFrame.isStrike()) {
                var isOneFrameBeforeLast = currentFrameIndex + 2 < frames.length - 1;
                if (isOneFrameBeforeLast) {
                    var secondNextFrame = frames[currentFrameIndex + 2];
                    var secondNextFrame1stRollScore = rollScore(secondNextFrame, 0)
                    secondNextRollScore = secondNextFrame1stRollScore;
                }
            } else {
                secondNextRollScore = nextFrame.secondRollScore;
            }
        }
        frame.score += firstNextRollScore;
        if (frame.isStrike()) {
            frame.score += secondNextRollScore;
        }
    }
    return frame.score;
}

var Frame = function (firstRollResult, secondRollResult, frameIndex) {
    this.rolls = [firstRollResult, secondRollResult];
    this.index = frameIndex;
    this.firstRollScore = rollScore(this.rolls, 0);
    this.secondRollScore = rollScore(this.rolls, 1);
    this.score = (this.firstRollScore + this.secondRollScore);

    this.isLastFrame = function(gameLength) {
        return this.index == gameLength - 1;
    };

    this.isStrike = function() {
        return (this.firstRollScore == 10);
    }
}

var rollScore = function (rolls, rollIndex) {
    rollResult = rolls[rollIndex];

    if (rollResult == "X") {
        return 10;
    }
    if (rollResult == "-" || !rollResult) {
        return 0;
    }
    if (rollResult == "/") {
        var previousRollScore = rollScore(rolls, rollIndex - 1);
        return 10 - previousRollScore;
    }
    return parseInt(rollResult);
}