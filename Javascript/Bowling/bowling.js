exports.calculateScore = function (game) {
    var rolls = game.toRolls();
    return rolls.sum();
}

String.prototype.toRolls = function () {
    var obj = [];
    this.split('|').forEach(function (frame) {
        obj.push({
            "firstRollScore": parseInt(frame[0]),
            "secondRollScore": parseInt(frame[1])
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