using NUnit.Framework;
using System;
using FizzBuzz;

namespace FizzBuzzTests
{
	[TestFixture ()]
	public class Test
	{
		[Test ()]
		public void Give_1_prints_1_Test()
		{
			Assert.AreEqual (1, FizzBuzzGame.printValue(1));
		}

		[Test ()]
		public void Give_2_prints_2_Test()
		{
			Assert.AreEqual (2, FizzBuzzGame.printValue(2));
		}

		[Test ()]
		public void Give_3_prints_Fizz_Test()
		{
			Assert.AreEqual ("Fizz", FizzBuzzGame.printValue(3));
		}

		[Test ()]
		public void Give_5_prints_Buzz_Test()
		{
			Assert.AreEqual ("Buzz", FizzBuzzGame.printValue(5));
		}

		[Test ()]
		public void Give_9_prints_Fizz_Test()
		{
			Assert.AreEqual ("Fizz", FizzBuzzGame.printValue(9));
		}

		[Test ()]
		public void Give_15_prints_FizzBuzz_Test()
		{
			Assert.AreEqual ("FizzBuzz", FizzBuzzGame.printValue(15));
		}
	}
}

