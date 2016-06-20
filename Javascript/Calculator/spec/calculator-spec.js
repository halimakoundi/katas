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
 * Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2
 * Delimiters can be of any length with the following format:
 * “//[delimiter]\n” for example: “//[]\n12***3” should return 6
 * Allow multiple delimiters like this: “//[delim1][delim2]\n”
 * for example “//[][%]\n12%3” should return 6.
 */

var parser = require("../parser.js").new();
var calculator = require("../calculator.js").new(parser);
var testCases = [];
var addTestCase = function (testCaseName, expression, expectedResult) {
    var TestCase = {
        'testCaseName': testCaseName,
        'expression': expression,
        'expectedResult': expectedResult
    }
    testCases.push(TestCase);
}
var runTest=function(name, expression, expected) {
    it(name,
        function () {
            var sum = calculator.add(expression);

            expect(sum).toBe(expected);
        });
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
        addTestCase("Should ignore numbers greater than 1000 so that 2,1001 returns 2",
            "2,1001", 2);
        addTestCase("Should handle delimiters of any length so that //[]\n12***3 returns 6",
            "//[]\n12***3", 6);
        addTestCase("Should handle multiple delimiters so that //[][%]\n12%3 returns 6",
            "//[][%]\n12%3", 6);

        for (testCase of testCases) {
            var name = testCase.testCaseName;
            var expression = testCase.expression;
            var expected = testCase.expectedResult;
            runTest(name, expression, expected);
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