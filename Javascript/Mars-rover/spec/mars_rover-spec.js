var rover = require("../mars_rover.js");

describe("The rover stays at the same position after an emtpy command", function () {

    it("Should return (0,0,N)  as its position when processing an empty command", function () {

        var returnedMove = rover.move();

        expect(returnedMove).toBe("0,0,N");
    });
});
