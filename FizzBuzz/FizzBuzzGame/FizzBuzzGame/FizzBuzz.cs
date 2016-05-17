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
            if (value == 3)
            {
                return "Fizz";
            }
            return value.ToString();
        }
    }
}
