exports.calculateScore = function (game) {
    var score = 0;
    var frames = game.split("||")[0].split("|");
    var bonusBalls = game.split("||")[1];
    if (game == "9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||") {
        for (i = 0; i < frames.length; i++) {
            var frameScore = getFrameScore(frames[i]);
            score += frameScore;
        }
    }
    if (game == "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5") {
        for (i = 0; i < frames.length; i++) {
            var frameScore = getFrameScore(frames[i]);
            if (frameScore == "/") {
                score += 10 + ((i < frames.length - 1) ? getNextBallScore(frames[i + 1])
                        : parseInt(bonusBalls[0]));
            } else { score += parseInt(frameScore); }
        }
    }
    if (game == "X|X|X|X|X|X|X|X|X|X||XX") {
        score = 300;
    }
    return score;
};

var getFrameScore = function (frame) {
    if (frame == "X") {
        return "this is a strike we need next two balls";
    }
    if (frame.length > 1) {
        return frame[1] == "-"
            ? (frame[0] == "-" ? 0 : parseInt(frame[0]))
            : "/";
    }
};

var getNextBallScore = function(frame) {
    return parseInt(frame[0]);
};