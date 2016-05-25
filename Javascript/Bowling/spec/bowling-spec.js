var bowling = require("../bowling.js");

describe("Games containing normal scores",
    function () {

        it("Should return 20 points for 10 ball rolls of one pin hit game",
            function() {
                var score = bowling.calculateScore("11|11|11|11|11|11|11|11|11|11|");
                expect(score).toBe(20);
            });
    });
