using System.Collections.Generic;

namespace RomanNumeral.Src
{
    public class RomanNumeralConverter
    {
        private readonly Dictionary<int, string> _results = new Dictionary<int, string>
        {
            {1, "I" },
            {4, "IV" },
            {5, "V" },
            {9, "IX" },
            {10, "X" }
        };

        public string Convert(int number)
        {
            if (_results.ContainsKey(number))
            {
                return _results[number];
            }
            if (number > 5)
            {
                const string result = "V";
                return result + Convert(number - 5);
            }
            return _results[1] + Convert(number - 1);
        }
    }
}
/*
({} -> nil) no code at all->code that employs nil
(nil -> constant)
(constant -> constant+) a simple constant to a more complex constant
(constant -> scalar) replacing a constant with a variable or an argument
(statement -> statements) adding more unconditional statements.
(unconditional -> if) splitting the execution path
(scalar -> array)
(array -> container)
(statement -> recursion)
(if -> while)
(expression -> function) replacing an expression with a function or algorithm
(variable -> assignment) replacing the value of a variable.
     */
