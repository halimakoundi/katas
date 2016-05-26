namespace RomanNumeral.Src
{
    public class RomanNumeralConverter
    {
        public string Convert(int number)
        {
            var numeral = "I";
            if (number > 1)
            {
                numeral = "II";
            }
            return numeral;
        }
    }
}
