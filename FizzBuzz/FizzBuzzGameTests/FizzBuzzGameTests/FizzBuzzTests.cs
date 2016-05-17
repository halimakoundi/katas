using FizzBuzzGame;
using NUnit.Framework;

namespace FizzBuzzGameTests
{
    [TestFixture]
    public class FizzBuzzTests
    {
        [Test]
        public void GiveOneReturnsOne()
        {
            var fizzbuzz = new FizzBuzz();
            var returnedValue = fizzbuzz.ReturnValue(1);
            Assert.That(returnedValue, Is.EqualTo(1));
        }

        [Test]
        public void GiveTwoReturnsTwo()
        {
            var fizzbuzz = new FizzBuzz();
            var returnedValue = fizzbuzz.ReturnValue(2);
            Assert.That(returnedValue, Is.EqualTo(2));
        }
    }
}
