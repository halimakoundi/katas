var bowling = require("../bowling.js");

describe("Games containing normal scores",
    function () {

        it("Should return 20 points for 10 ball rolls of one pin hit game",
            function() {
                var score = bowling.calculateScore("11|11|11|11|11|11|11|11|11|11");

                expect(score).toBe(20);
            });

        it("Should return 28 points for a game like '11|15|15|11|11|11|11|11|11|11' ",
            function() {
                var score = bowling.calculateScore("11|15|15|11|11|11|11|11|11|11");

                expect(score).toBe(28);
            });

    });

describe("Games containing miss hits",
    function () {

        it("Should score 27 for a game like '-1|15|15|11|11|11|11|11|11|11' ",
            function() {
                var score = bowling.calculateScore("-1|15|15|11|11|11|11|11|11|11");
                expect(score).toBe(27);
            }); 

        it("Should score 24 for a game like '-1|15|15|11|-1|11|--|11|11|11' ",
            function () {
                var score = bowling.calculateScore("-1|15|15|11|-1|11|--|11|11|11");
                expect(score).toBe(24);
            });

    });

describe("Games containing spares",
    function () {

        it("Should score 37 for a game like '-/|15|15|11|11|11|11|11|11|11' ",
            function () {
                var score = bowling.calculateScore("-/|15|15|11|11|11|11|11|11|11");
                expect(score).toBe(37);
            });
    });