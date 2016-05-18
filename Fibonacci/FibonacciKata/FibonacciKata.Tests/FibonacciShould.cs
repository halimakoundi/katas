using FibonacciKata.Src;
using NUnit.Framework;

/*
 *The Fibonacci sequence 
 * (named after the Italian mathematician Leonardo Fibonacci) 
 * is a sequence of numbers where each number 
 * is the sum of the previous two numbers.
 *
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

            Assert.That(sequence, Is.Empty );
        }
    }
}