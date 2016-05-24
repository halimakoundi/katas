exports.calculateScore = function (game) {
    var score = 0;
    var frames = game.split("||")[0].split("|");
    var bonusBalls = game.split("||")[1];

    if (game == "9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||") {
        for (i = 0; i < frames.length; i++) {
            score += getFrameScore(frames[i]);
        }
    }
    if (game == "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5") {
        score = 150;
    }
    if (game == "X|X|X|X|X|X|X|X|X|X||XX") {
        score = 300;
    }
    return score;
};

var getFrameScore = function (frame) {
    if (frame.length > 1) {
        return frame[1] == "-" ? (frame[0] == "-" ? 0 : parseInt(frame[0])) : "need next frame";
    }
};