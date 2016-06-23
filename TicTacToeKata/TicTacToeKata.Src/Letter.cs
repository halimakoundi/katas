using System;
using System.Collections.Generic;

namespace TicTacToeKata.Src
{
    public class Letter
    {
        private readonly string _letter;

        public Letter(string letter)
        {
            ValidateSubmittedLetter(letter);
            _letter = letter;
        }

        private void ValidateSubmittedLetter(string letter)
        {
            var validLetters = new List<string> { "X", "O" };
            if (string.IsNullOrEmpty(letter)
                || !validLetters.Contains(letter))
            {
                throw new Exception($"Provided letter is not valid: {letter}");
            }
        }

        public Letter()
        {
        }

        public override bool Equals(object obj)
        {
            var otherLetter = (Letter)obj;
            return _letter == otherLetter._letter;
        }

        public bool IsEmpty()
        {
            return string.IsNullOrEmpty(_letter);
        }
    }
}