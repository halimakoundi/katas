namespace TicTacToeKata.Src
{
    public class Position
    {
        private int _row;
        private readonly Column _column;

        public Position(int column, int row)
        {
            _column = new Column(column);
            _row = row;
        }

        public Position()
        {
            _column = new Column();
        }

        public override bool Equals(object obj)
        {
            var otherPosition = (Position)obj;
            return _column.Equals(otherPosition._column)
                   && _row == otherPosition._row;
        }
    }
}