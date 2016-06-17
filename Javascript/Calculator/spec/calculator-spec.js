/**
 * 
 * Create a simple String calculator with a method int Add(string numbers)
 * The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”
 * Allow the Add method to handle an unknown amount of numbers
 */
var calculator = require("../calculator.js");

describe("String calculator ",
    function() {

        it("Should return zero for an empty string",
            function() {
                var sum = calculator.add("");

                expect(sum).toBe(0);
            });
    });