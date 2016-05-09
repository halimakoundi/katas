using System;

namespace FizzBuzz
{
	public class FizzBuzzGame
	{
		public static object printValue(int givenValue ){
			var isMultipleOfThree = (givenValue % 3 == 0);
			var isMultipleOfFive = (givenValue % 5 == 0);
			if (isMultipleOfThree && isMultipleOfFive) {
				return "FizzBuzz";
			}else if (isMultipleOfThree) {
				return "Fizz";
			} else if (isMultipleOfFive) {
				return "Buzz";
			}
			return givenValue;	
		}
	}
}

