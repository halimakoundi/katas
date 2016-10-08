namespace TicTacToeKata.Src
{
    public class Cell
    {
        private readonly Position _position;
        private readonly Letter _letter;

        public Cell(Letter letter, Position position)
        {
            _letter = letter;
            _position = position;
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