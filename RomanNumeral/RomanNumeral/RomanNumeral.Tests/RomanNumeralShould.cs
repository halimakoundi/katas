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
        [TestCase(5,"V")]
        [TestCase(6,"VI")]
        [TestCase(7, "VII")]
        [TestCase(8, "VIII")]
        [TestCase(9, "IX")]
        [TestCase(10, "X")]
        [TestCase(11, "XI")]
        public void convert_number_to_roman(int number, string expectedNumeral)
        {
            var romanNumeralConverter = new RomanNumeralConverter();

            var romanNumeral = romanNumeralConverter.Convert(number);

            Assert.That(romanNumeral, Is.EqualTo(expectedNumeral));
        }
    }
}
