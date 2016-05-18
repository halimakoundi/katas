using System.Collections.Generic;
using System.Linq;
using FibonacciKata.Src;
using NUnit.Framework;

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

namespace FibonacciKata.Tests
{
    [TestFixture]
    public class FibonacciShould
    {
        [TestCase(0, new int[] { })]
        [TestCase(1, new[] { 0 })]
        [TestCase(2, new[] { 0, 1 })]
        [TestCase(3, new[] { 0, 1, 1 })]
        public void return_fibonacci_sequence_of_given_length(
            int sequenceLength,
            int[] expectedSequence)
        {
            var fibonacci = new Fibonacci();

            var sequence = fibonacci.Generate(sequenceLength);

            Assert.That(sequence, Is.EqualTo(expectedSequence.ToList()));
        }
    }
}