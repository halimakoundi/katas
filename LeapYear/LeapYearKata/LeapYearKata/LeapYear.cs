using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeapYearKata
{
    public class LeapYear
    {
        public bool IsLeapYear(int year)
        {
            if (year % 4 == 0)
            {
                return true;
            }
            return false;
        }
    }
}
