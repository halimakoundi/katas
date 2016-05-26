using NUnit.Framework;
using RomanNumeral.Src;

namespace RomanNumeral.Tests
{
    [TestFixture]
    public class RomanNumeralShould
    {
        [TestCase(1,"I")]
        [TestCase(2,"II")]
        [TestCase(3,"III")]
        [TestCase(4,"IV")]
        public void convert_number_to_roman(int number, string expectedNumeral)
        {
            var romanNumeralConverter = new RomanNumeralConverter();

            var romanNumeral = romanNumeralConverter.Convert(number);

            Assert.That(romanNumeral, Is.EqualTo(expectedNumeral));
        }
    }
}
