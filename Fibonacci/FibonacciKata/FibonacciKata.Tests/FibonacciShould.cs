using System.Collections.Generic;
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
        [Test]
        public void return_an_empty_sequence_given_length_zero()
        {
            var fibonacci = new Fibonacci();

            var sequence = fibonacci.Generate(0);

            Assert.That(sequence, Is.Empty);
        }

        [Test]
        public void return_a_sequence_containing_only_0_given_length_1()
        {
            var sequenceContainingJustAZero = new List<int> { 0 };
            var fibonacci = new Fibonacci();

            var sequence = fibonacci.Generate(1);

            Assert.That(sequence, Is.EqualTo(sequenceContainingJustAZero));
        }
    }
}