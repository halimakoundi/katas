namespace LeapYearKata
{
    public static class Helper
    {
        public static bool IsDivisibleBy(this int year, int denominator)
        {
            return year % denominator == 0;
        }
    }
}