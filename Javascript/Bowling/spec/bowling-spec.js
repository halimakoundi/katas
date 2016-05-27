var bowling = require("../bowling.js");

describe("All gutter Games",
    function () {

        it("Should return a score of 0 for all gutter games", function() {
            var score = bowling.calculateScore("--|--|--|--|--|--|--|--|--|--||");

            expect(score).toBe(0);
        })

    });

