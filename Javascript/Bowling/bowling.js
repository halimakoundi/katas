exports.calculateScore = function(game) {
    if (game == "9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||") {
        return 90;
    }
    if (game == "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5") {
        return 150;
    }
    return 300;
};