using FizzBuzzGame;
using NUnit.Framework;

namespace FizzBuzzGameTests
{
    [TestFixture]
    public class FizzBuzzTests
    {
        [TestCase(1,"1")]
        [TestCase(2,"2")]
        public void GiveValueReturnsValue(int value, string expected)
        {
            var fizzbuzz = new FizzBuzz();
            var returnedValue = fizzbuzz.ReturnValue(value);
            Assert.That(returnedValue, Is.EqualTo(expected));
        }

        [Test]
        public void GiveThreeReturnsFizz()
        {
            var fizzbuzz=new FizzBuzz();
            var returnedValue=fizzbuzz.ReturnValue(3);
            Assert.That(returnedValue, Is.EqualTo("Fizz"));
        }
    }
}
