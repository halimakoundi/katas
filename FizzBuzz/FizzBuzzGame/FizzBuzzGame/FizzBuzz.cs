using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FizzBuzzGame
{
    public class FizzBuzz
    {
        public string ReturnValue(int value)
        {
            if (IsFizz(value) && IsBuzz(value))
            {
                return "FizzBuzz";
            }
            if (IsFizz(value))
            {
                return "Fizz";
            }
            if (IsBuzz(value))
            {
                return "Buzz";
            }
            return value.ToString();
        }

        private static bool IsBuzz(int value)
        {
            return value % 5 == 0;
        }

        private static bool IsFizz(int value)
        {
            return value % 3 == 0;
        }
    }
}
