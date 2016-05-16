
namespace LeapYearKata
{
    public class LeapYear
    {
        public bool IsLeapYear(int year)
        {
            if (year%4 == 0 && !(year % 100 == 0))
            {
                return true;
            }
            return false;
        }
    }
}
