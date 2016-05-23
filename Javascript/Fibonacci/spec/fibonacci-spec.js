var fibonacci = require("../fibonacci.js");
/*
 *The Fibonacci sequence 
 * (named after the Italian mathematician Leonardo Fibonacci) 
 * is a sequence of numbers where each number 
 * is the sum of the previous two numbers.
 *
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 
 * 144, 233, 377, 610, 987, 1597, 2584, 4181, 
 * 6765, 10946, 17711, 28657, 46368, 75025, 
 * 121393, 196418, 317811,
 **/
describe("Returns a sequence", function () {

    it("Should return an empty sequence for length = 0",
        function () {
            var fibonacciSequence = fibonacci.generateSequence(0);
            expect(fibonacciSequence).toEqual([]);
        });

});