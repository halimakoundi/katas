﻿using System.Collections.Generic;

namespace RomanNumeral.Src
{
    public class RomanNumeralConverter
    {
        private readonly IDictionary<int, string> _arabicsToRomans = new Dictionary<int, string>
        {
            {1000, "M" },
            {900, "CM" },
            {500, "D" },
            {400, "CD" },
            {100, "C" },
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
            var romanNumeral = string.Empty;
            var arabicToRomansEnumerator = _arabicsToRomans.GetEnumerator();

            while (arabicToRomansEnumerator.MoveNext())
            {
                var arabicToRoman = arabicToRomansEnumerator.Current;
                var arabicNumeral = arabicToRoman.Key;
                while (number >= arabicNumeral)
                {
                    romanNumeral += arabicToRoman.Value;
                    number -= arabicToRoman.Key;
                }
            }
            return romanNumeral;
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
