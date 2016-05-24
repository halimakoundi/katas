var bowling = require("../bowling.js");

describe("Ten strikes game scores 300 points",
    function() {
        it("Should return 300 as the score for X|X|X|X|X|X|X|X|X|X||XX game",
            function() {
                var score = bowling.calculateScore("X|X|X|X|X|X|X|X|X|X||XX");
                expect(score).toBe(300);
            });
    });

describe("Nine pins hit of all frames scores 90 points",
    function () {
        it("Should return 90 as the score for 9-|9-|9-|9-|9-|9-|9-|9-|9-|9-|| game",
            function() {
                var score = bowling.calculateScore("9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||");
                expect(score).toBe(90);
            });
    });

describe("Ten spares combined with 5 pins hits on first ball game scores 150 points", function() {
    it("Should return 150 for 5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5 game", function() {
        var score = bowling.calculateScore("5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5");
        expect(score).toBe(150);
    })
});