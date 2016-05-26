var rover = require("../mars_rover.js");

describe("The rover stays at the same position after an emtpy command", function () {

    it("Should return (0,0,N)  as its position when processing an empty command", function () {

        var returnedPosition = rover.move();

        expect(returnedPosition).toBe("0,0,N");
    });

    it("Should return (0,1,N) as its position when told to move",
        function() {
            var returnedPosition = rover.move("M");

            expect(returnedPosition).toBe("0,1,N");
        });

    it("Should return (0,2,N) when asked to move twice ",
        function() {
            var returnedPosition = rover.move("MM");

            expect(returnedPosition).toBe("0,2,N");
        });

});
