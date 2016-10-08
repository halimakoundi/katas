exports.calculateScore = function (game) {
    var score = 0;
    var frames = game.split("||")[0].split("|");
    var bonusBalls = game.split("||")[1];
    for (i = 0; i < frames.length; i++) {
        console.log('score', score);
        var frameScore = getFrameScore(frames[i]);
        switch (frameScore) {
            case "/":
                score += 10 + ((i < frames.length - 1) ? getNextBallScore(frames[i + 1])
                        : parseInt(bonusBalls[0]));
                break;
            case "X":
                score += 10 + ((i < frames.length - 2) ? (getNextTwoBallsScore(frames[i + 1], frames[i + 2]))
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
    var frameScore = 0;
    if (frame.length > 1) {
        switch (frame[0]) {
            case "-":
                switch (frame[1]) {
                    case "-":
                        break;
                    case "/":
                        frameScore = "/";
                        break
                    default:
                        frameScore = parseInt(frame[1]);
                }
                break;
            default:
                switch (frame[1]) {
                    case "-":
                        frameScore = parseInt(frame[0]);
                        break;
                    case "/":
                        frameScore = "/";
                        break;
                    default:
                        frameScore = parseInt(frame[0]) + parseInt(frame[1]);
                }
        }
    } else {
        frameScore = "X";
    }
    return frameScore;
};

var getNextBallScore = function (frame) {
    if (frame[0] == "X") return 10;
    if (frame[0] == "-") return 0;
    return parseInt(frame[0]);
};

var getNextTwoBallsScore = function (frame1, frame2) {
    var ball1Score = getNextBallScore(frame1);
    var ball2Score = 0;
    if (frame1.length > 1) {
        switch (frame1[1]) {
            case "/":
                ball2Score = 10 - ball1Score;
                break;
            case "-":
                break;
            default:
                ball2Score = parseInt(frame1[1]);
        }
    } else {
        ball2Score = getNextBallScore(frame2);
    }
    return ball1Score + ball2Score;
};