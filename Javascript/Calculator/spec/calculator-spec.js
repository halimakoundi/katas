/**
 * 
 * Create a simple String calculator with a method int Add(string numbers)
 * The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”
 * Allow the Add method to handle an unknown amount of numbers
 * Allow the Add method to handle new lines between numbers (instead of commas).
 * a. the following input is ok: “1\n2,3” (will equal 6)
 * b. the following input is NOT ok: “1,\n” (not need to prove it - just clarifying)
 * Support different delimiters
 * to change a delimiter, the beginning of the string will contain a separate line 
 * that looks like this: “//[delimiter]\n[numbers…]” for example “//;\n1;2” 
 * should return three where the default delimiter is ‘;’ . 
 * The first line is optional. all existing scenarios should still be supported
 */

var parser = require("../parser.js").new();
var calculator = require("../calculator.js").new(parser);
var testCases = [];
var addTestCase = function (testCaseName, expression, expectedResult) {
    testCases.push(function () {
        this.testCaseName = testCaseName;
        this.expression = expression;
        this.expectedResult = expectedResult;
        return this;
    }());
}
describe("String calculator ",
    function () {
        addTestCase("Should return zero for an empty string", "", 0);
        addTestCase("Should return the int equivalent of the one string number passed to it",
            "1", 1);
        addTestCase("Should return the sum of the two string numbers passed to it",
            "1,2", 3);
        addTestCase("Should return the sum of the multiple numbers string parameter passed to it",
            "1,2,4", 7);
        addTestCase("Should handle new lines between numbers instead of commas",
           "1\n2,3", 6);
        addTestCase("Should handle other delimiters like |",
           "1|2,3", 6);
        addTestCase("Should handle other delimiters like #", "1#2,3", 6);
        addTestCase("Should allow for change if the delimiter such as //;\n1;2 returns 3",
            "//;\n1;2", 3);
        addTestCase("Should allow for change if the delimiter such as //?\n2?2?1 returns 5",
            "//?\n2?2?1", 5);

        for (testCase of testCases) {
            it(testCase.testCaseName,
                function () {
                    var sum = calculator.add(testCase.expression);

                    expect(sum).toBe(testCase.expectedResult);
                });
        }

        it("Should throw an exception for negative numbers",
            function () {
                expect(function () { calculator.add("//?\n2?2?-1"); })
                    .toThrow(new Error("negatives not allowed: -1"));
            });

        it("Should throw an exception for negative numbers and list them all",
            function () {
                expect(function () { calculator.add("//?\n2?-2?-1"); })
                    .toThrow(new Error("negatives not allowed: -2, -1"));
            });
    });