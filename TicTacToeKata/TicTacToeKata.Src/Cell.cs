namespace TicTacToeKata.Src
{
    public class Cell
    {
        private readonly string _letter;
        private readonly Position _position;

        public Cell(string letter, int column, int row)
        {
            _letter = letter;
            _position = new Position(column, row);
        }

        public Cell()
        {
            _position = new Position();
        }

        public bool IsEmpty()
        {
            return string.IsNullOrEmpty(_letter);
        }

        public override bool Equals(object obj)
        {
            var otherCell = (Cell)obj;
            return _letter == otherCell._letter
                   && _position.Equals(otherCell._position);
        }
    }
}