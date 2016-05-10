using System;

namespace FizzBuzz
{
	public class FizzBuzzGame
	{
		public string ReturnValue(int value)
		{
			var isFizz = value % 3 == 0;
			var isBuzz = value % 5 == 0;
			if (isFizz && isBuzz) 
			{
				return "FizzBuzz";
			}
			else if (isFizz) 
			{
				return "Fizz";
			}
			else if(isBuzz)
			{
				return "Buzz";
			}
			return value.ToString();
		}

		public bool IsMultipleOf(int value, int denominator)
		{
			return (value % denominator == 0);
		}
	}
}

