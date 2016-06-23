using System;
using System.Collections.Generic;

namespace TicTacToeKata.Src
{
    public class Rules
    {
        private static readonly List<string> _validLetters = new List<string> { "X", "O" };

        public static void ValidateSubmittedLetter(string letter)
        {
            if (string.IsNullOrEmpty(letter)
                || !_validLetters.Contains(letter))
            {
                throw new Exception($"Provided letter is not valid: {letter}");
            }
        }
    }
}