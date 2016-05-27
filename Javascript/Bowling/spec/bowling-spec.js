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

        it("Should return score of 2 for two one pin hit rolls",
            function() {
                var score = bowling.calculateScore("11|--|--|--|--|--|--|--|--|--||");

                expect(score).toBe(2);
            });

        it("Should return 20 for a game of one pin hit rolls",
            function() {
                var score = bowling.calculateScore("11|11|11|11|11|11|11|11|11|11||");

                expect(score).toBe(20);
            });

        it("Should return 24 for a game of one pin hit rolls, and one roll of 5 pins hit",
            function () {
                var score = bowling.calculateScore("11|51|11|11|11|11|11|11|11|11||");

                expect(score).toBe(24);
            });
    });

describe("Games with spares",
    function() {

        it("Should return 10 for a game with one spare and all gutter games",
            function() {
                var score = bowling.calculateScore("-/|--|--|--|--|--|--|--|--|--||");

                expect(score).toBe(10);
            });

        it("Shoud return 10 for a game with first roll one, second roll spare then all gutter game",
            function () {
                var score = bowling.calculateScore("1/|--|--|--|--|--|--|--|--|--||");

                expect(score).toBe(10);
            });

        it("Should return 12 for a game with 1st roll hit one, then spare, then hit one, then all gutter game",
            function () {
                var score = bowling.calculateScore("1/|1-|--|--|--|--|--|--|--|--||");

                expect(score).toBe(12);
            });

        it("Should return 141 for the following game 5/|5/|5/|5/|5/|5/|5/|5/|5/|51|| ",
            function() {
                var score = bowling.calculateScore("5/|5/|5/|5/|5/|5/|5/|5/|5/|51||");

                expect(score).toBe(141);
            });
    });

describe("Games with strikes",
    function() {

        it("Should return a score of 10 for one strike and all gutter game",
            function() {
                var score = bowling.calculateScore("X|--|--|--|--|--|--|--|--|--||");

                expect(score).toBe(10);
            });

        it("Should return a score of 12 for one strike and a following one pin hit then all gutter game",
            function () {
                var score = bowling.calculateScore("X|1-|--|--|--|--|--|--|--|--||");

                expect(score).toBe(12);
            });

    });