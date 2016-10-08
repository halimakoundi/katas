using System;

namespace FizzBuzz
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			for(int i = 1; i < 101 ; i ++ ){				
				Console.WriteLine (FizzBuzzGame.printValue(i));
			}
		}
	}
}
