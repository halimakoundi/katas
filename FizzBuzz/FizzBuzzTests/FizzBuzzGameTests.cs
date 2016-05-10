using System;
using NUnit.Framework;
using FizzBuzz;

namespace FizzBuzzTests
{
	[TestFixture]
	public class FizzBuzzGameTests
	{

		FizzBuzzGame fizzBuzzGame = new FizzBuzzGame();

		[TestCase]
		public void give_1_return_1()
		{	
			Assert.AreEqual (1.ToString(), fizzBuzzGame.ReturnValue(1));
		}

		[TestCase]
		public void give_2_return_2()
		{
			Assert.AreEqual (2.ToString(), fizzBuzzGame.ReturnValue(2));
		}

		[TestCase]
		public void give_3_return_Fizz()
		{
			Assert.AreEqual ("Fizz", fizzBuzzGame.ReturnValue(3));
		}

		[TestCase]
		public void give_5_return_Buzz()
		{
			Assert.AreEqual ("Buzz", fizzBuzzGame.ReturnValue(5));
		}

		[TestCase]
		public void give_15_return_FizzBuzz()
		{
			Assert.AreEqual ("FizzBuzz", fizzBuzzGame.ReturnValue(15));
		}

		[TestCase]
		public void give_150_return_FizzBuzz()
		{
			Assert.AreEqual ("FizzBuzz", fizzBuzzGame.ReturnValue(150));
		}
	}
}

