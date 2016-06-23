namespace TicTacToeKata.Src
{
    public class Position
    {
        private int _column;
        private int _row;

        public Position(int column, int row)
        {
            _column = column;
            _row = row;
        }

        public Position()
        {
        }

        public override bool Equals(object obj)
        {
            var otherPosition = (Position)obj;
            return _column == otherPosition._column
                   && _row == otherPosition._row;
        }
    }
}