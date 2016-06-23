namespace TicTacToeKata.Src
{
    public class Letter
    {
        private readonly string _letter;

        public Letter(string letter)
        {
            Rules.ValidateSubmittedLetter(letter);
            _letter = letter;
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