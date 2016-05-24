exports.calculateScore = function (game) {
    var score = 0;
    var frames = game.split("||")[0].split("|");
    var bonusBalls = game.split("||")[1];
    for (i = 0; i < frames.length; i++) {
        var frameScore = getFrameScore(frames[i]);
        switch (frameScore) {
            case "/":
                score += 10 + ((i < frames.length - 1) ? getNextBallScore(frames[i + 1])
                        : parseInt(bonusBalls[0]));
                break;
            case "X":
                score += 10 + ((i < frames.length - 2) ? (getNextBallScore(frames[i + 1]) + getNextBallScore(frames[i + 2]))
                : (((i < frames.length - 1) ? (getNextBallScore(frames[i + 1]) + getNextBallScore(bonusBalls[0]))
                    : (getNextBallScore(bonusBalls[0]) + getNextBallScore(bonusBalls[1])))
                    ));
                break;
            default:
                score += parseInt(frameScore);
        }
    }
    return score;
};

var getFrameScore = function (frame) {
    if (frame == "X") {
        return "X";
    }
    if (frame.length > 1) {
        return frame[1] == "-"
            ? (frame[0] == "-" ? 0 : parseInt(frame[0]))
            : "/";
    }
};

var getNextBallScore = function (frame) {
    if (frame[0] == "X") return 10;
    return parseInt(frame[0]);
};