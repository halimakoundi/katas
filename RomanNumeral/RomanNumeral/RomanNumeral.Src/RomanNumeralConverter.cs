using System.Collections.Generic;

namespace RomanNumeral.Src
{
    public class RomanNumeralConverter
    {
        private readonly IDictionary<int, string> _mappings = new Dictionary<int, string>
        {
            {90, "XC" },
            {50, "L" },
            {40, "XL" },
            {10, "X" },
            {9, "IX" },
            {5, "V" },
            {4, "IV" },
            {1, "I" }
        };

        public string Convert(int number)
        {
            var result = string.Empty;
            var mappingEnumerator = _mappings.GetEnumerator();

            while (mappingEnumerator.MoveNext())
            {
                var mapping = mappingEnumerator.Current;
                while (number >= mapping.Key)
                {
                    result += mapping.Value;
                    number -= mapping.Key;
                }
            }
            return result;
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
