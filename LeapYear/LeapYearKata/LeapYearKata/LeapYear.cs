
namespace LeapYearKata
{
    public class LeapYear
    {
        public bool IsLeapYear(int year)
        {
            bool isDivisbleBy100 = IsDivisibleBy(year, 100);
            var isDivisibleBy400 = IsDivisibleBy(year, 400);
            var isDivisibleBy4 = IsDivisibleBy(year, 4);
            if (isDivisibleBy4 && !isDivisbleBy100 || isDivisibleBy400)
            {
                return true;
            }
            return false;
        }

        private static bool IsDivisibleBy(int year, int denominator)
        {
            return year % denominator == 0;
        }
    }
}
