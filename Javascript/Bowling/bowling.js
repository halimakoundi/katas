exports.calculateScore = function (game) {
    var score = 0;
    var mainGame = game.split("||")[0];
    var bonusRolls = game.split("||")[1];
    var frames = mainGame.split("|");
    frames.forEach(function (frame) {
        var firstRollScore = rollScore(frame[0]);
        var secondRollScore = rollScore(frame[1]);

        frameScore = firstRollScore + secondRollScore;
        score += frameScore;
    });
    return score;
};

var rollScore = function (frameRoll) {
    if (frameRoll == "-") {
        return 0;
    }
    return parseInt(frameRoll);
}