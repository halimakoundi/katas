exports.calculateScore = function (game) {
    var rolls = game.toRolls();
    return rolls.sum();
}

String.prototype.toRolls = function () {
    var obj = [];
    this.split('|').forEach(function (frame) {
        obj.push({
            "firstRollScore": frame[0] == '-' ? 0 : parseInt(frame[0]),
            "secondRollScore": frame[1] == '/' ? 11 : (frame[1] == '-' ? 0 : parseInt(frame[1]))
        });
    });
    return obj;
}

Array.prototype.sum = function () {
    var total = 0;
    this.forEach(function (element) {
        console.log(element);
        total += element.firstRollScore + element.secondRollScore;
    });
    return total;
}