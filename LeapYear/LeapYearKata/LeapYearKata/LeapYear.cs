
namespace LeapYearKata
{
    public class LeapYear
    {
        public bool IsLeapYear(int year)
        {
            return (    year.IsDivisibleBy(4) && !year.IsDivisibleBy(100)) 
                    ||  year.IsDivisibleBy(400);
        }
    }
}
