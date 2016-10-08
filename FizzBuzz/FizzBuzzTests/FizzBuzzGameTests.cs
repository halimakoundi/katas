using System;
using NUnit.Framework;
using FizzBuzz;

namespace FizzBuzzTests
{
	[TestFixture]
	public class FizzBuzzGameTests
	{

		FizzBuzzGame fizzBuzzGame = new FizzBuzzGame();

		[TestCase("1", 1)]
		[TestCase("2", 2)]
		public void give_value_return_value(string expected, int value)
		{	
			Assert.AreEqual (expected, fizzBuzzGame.ReturnValue(value));
		}

		[TestCase("Fizz", 3)]
		[TestCase("Buzz", 5)]
		[TestCase("FizzBuzz", 15)]
		public void give_value_return_fizz_buzz_or_fizzbuzz(string expected, int value)
		{
			Assert.AreEqual (expected, fizzBuzzGame.ReturnValue(value));
		}

		[TestCase(true, 12, 4)]
		[TestCase(false, 7,3)]
		public void return_value_isMultipleOf_denominator(bool expected, int value, int denominator)
		{
			Assert.AreEqual (expected, fizzBuzzGame.IsMultipleOf(value, denominator));
		}
	}
}

