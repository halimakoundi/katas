var bowling = require("../bowling.js");

describe("Ten strikes game scores 300 points", function() {
    it("Should return 300 as the score for X|X|X|X|X|X|X|X|X|X||XX game", function () {
        var score = bowling.calculateScore("X|X|X|X|X|X|X|X|X|X||XX");
        expect(score).toBe(300);
    });
});