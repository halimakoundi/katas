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

        it("Should return 90 for the following game 9-|9-|9-|9-|9-|9-|9-|9-|9-|9-|| ",
            function () {
                var score = bowling.calculateScore("9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||");

                expect(score).toBe(90);
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

        it("Should return a score of 14 for the following game X|11|--|--|--|--|--|--|--|--|| ",
            function () {
                var score = bowling.calculateScore("X|11|--|--|--|--|--|--|--|--||");

                expect(score).toBe(14);
            });

        it("Should return a score of 44 for the following game X|11|X|X|--|--|--|--|--|--|| ",
            function () {
                var score = bowling.calculateScore("X|11|X|X|--|--|--|--|--|--||");

                expect(score).toBe(44);
            });

        it("Should return a score of 33 for the following game X|X|1-|--|--|--|--|--|--|--|| ",
            function () {
                var score = bowling.calculateScore("X|X|1-|--|--|--|--|--|--|--||");

                expect(score).toBe(33);
            });

        it("Should return a score of 60 for the following game X|X|X|--|--|--|--|--|--|--|| ",
            function () {
                var score = bowling.calculateScore("X|X|X|--|--|--|--|--|--|--||");

                expect(score).toBe(60);
            });

    });

describe("Games with bonus rolls",
    function() {

        it("Should return a score of 13 for a spare on the last frame and 3 pin hit bonus roll ",
            function() {
                var score = bowling.calculateScore("--|--|--|--|--|--|--|--|--|-/||3");

                expect(score).toBe(13);
            });

        it("Should return a score of 15 for a strike on the last frame and 3 and 2 pins hit bonus rolls ",
            function () {
                var score = bowling.calculateScore("--|--|--|--|--|--|--|--|--|X||32");

                expect(score).toBe(15);
            });

        it("Should return a score of 38 for --|--|--|--|--|--|--|--|X|X||32 game ",
            function () {
                var score = bowling.calculateScore("--|--|--|--|--|--|--|--|X|X||32");

                expect(score).toBe(38);
            });

        it("Should return a score of 30 for --|--|--|--|--|--|--|--|--|X||XX game ",
            function () {
                var score = bowling.calculateScore("--|--|--|--|--|--|--|--|--|X||XX");

                expect(score).toBe(30);
            });

        it("Should return a score of 150 for 5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5 game ",
            function () {
                var score = bowling.calculateScore("5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5");

                expect(score).toBe(150);
            });

        it("Should return a score of 300 for X|X|X|X|X|X|X|X|X|X||XX game ",
            function () {
                var score = bowling.calculateScore("X|X|X|X|X|X|X|X|X|X||XX");

                expect(score).toBe(300);
            });

        it("Should return a score of 167 for X|7/|9-|X|-8|8/|-6|X|X|X||81 game ",
            function () {
                var score = bowling.calculateScore("X|7/|9-|X|-8|8/|-6|X|X|X||81");

                expect(score).toBe(167);
            });
    });