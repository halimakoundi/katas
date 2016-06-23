namespace TicTacToeKata.Src
{
    public class Cell
    {
        private readonly Position _position;
        private readonly Letter _letter;

        public Cell(string letter, int column, int row)
        {
            _letter = new Letter(letter);
            _position = new Position(column, row);
        }


        public bool IsEmpty()
        {
            return _letter.IsEmpty();
        }

        public override bool Equals(object obj)
        {
            var otherCell = (Cell)obj;
            return _letter.Equals(otherCell._letter)
                   && _position.Equals(otherCell._position);
        }
    }
}