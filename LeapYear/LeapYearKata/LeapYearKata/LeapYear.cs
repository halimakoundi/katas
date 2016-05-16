
namespace LeapYearKata
{
    public class LeapYear
    {
        public bool IsLeapYear(int year)
        {
            var isDivisbleBy100 = year % 100 == 0;
            var isDivisibleBy400 = year % 400 == 0;
            var isDivisibleBy4 = year % 4 == 0;
            if (isDivisibleBy4 && !isDivisbleBy100 || isDivisibleBy400)
            {
                return true;
            }
            return false;
        }
    }
}
