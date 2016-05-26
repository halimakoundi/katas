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
        public void convert_number_to_roman(int number, string expectedNumeral)
        {
            var romanNumeral = new RomanNumeralConverter();
            Assert.That(romanNumeral.Convert(number), Is.EqualTo(expectedNumeral));
        }
    }
}
