var bowling = require("../bowling.js");

describe("All gutter Games",
    function () {

        it("Should return a score of 0 for all gutter games",
            function () {
                var score = bowling.calculateScore("--|--|--|--|--|--|--|--|--|--||");

                expect(score).toBe(0);
            });
    });

describe("Game with simple scores",
    function () {

        it("Should return one for a game with one pin hit",
            function () {

                var score = bowling.calculateScore("1-|--|--|--|--|--|--|--|--|--||");

                expect(score).toBe(1);
            });
    });
