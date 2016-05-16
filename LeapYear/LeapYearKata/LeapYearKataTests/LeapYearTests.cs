using LeapYearKata;
using NUnit;
using NUnit.Framework;

namespace LeapYearKataTests
{
    /**
        Write a function that returns true or false
        depending on whether its input integer is a leap year or not.
        A leap year is divisible by 4, 
        but is not otherwise divisible by 100 
        unless it is also divisible by 400.

        2001 is a typical common year
        1996 is a typical leap year
        1900 is an atypical common year 
        2000 is an atypical leap year
     * */
    [TestFixture]
    public class LeapYearTests
    {
        [TestCase(2001, false)]
        {
            var leapYear = new LeapYear();
            Assert.That(leapYear.IsLeapYear(year), Is.EqualTo(expected));
        }
    }
}
