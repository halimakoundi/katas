using LeapYearKata;
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
        [TestCase(1996, true)]
        [TestCase(1900, false)]
        [TestCase(2000, true)]
        public void IsLeapYearTest(int year, bool expected)
        {
            var leapYear = new LeapYear();
            var isLeapYear = leapYear.IsLeapYear(year);
            Assert.That(isLeapYear, Is.EqualTo(expected));
        }
    }
}
