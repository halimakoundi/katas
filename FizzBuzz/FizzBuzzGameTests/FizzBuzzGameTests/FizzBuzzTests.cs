using FizzBuzzGame;
using NUnit.Framework;

namespace FizzBuzzGameTests
{
    [TestFixture]
    public class FizzBuzzTests
    {
        [TestCase(1, "1")]
        [TestCase(2, "2")]
        [TestCase(3, "Fizz")]
        [TestCase(9, "Fizz")]
        [TestCase(5, "Buzz")]
        [TestCase(15, "FizzBuzz")]
        public void GiveValueReturnsCorrectAnswer(int value, string expected)
        {
            var fizzbuzz = new FizzBuzz();

            var returnedValue = fizzbuzz.ReturnValue(value);

            Assert.That(returnedValue, Is.EqualTo(expected));
        }

    }
}
