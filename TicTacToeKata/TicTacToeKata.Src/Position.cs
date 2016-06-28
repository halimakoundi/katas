namespace TicTacToeKata.Src
{
    public class Position
    {
        private readonly Column _column;
        private readonly Row _row;

        public Position(Column column, Row row)
        {
            _column = column;
            _row = row;
        }

        public override bool Equals(object obj)
        {
            var otherPosition = (Position)obj;
            return _column.Equals(otherPosition._column)
                   && _row.Equals( otherPosition._row);
        }
    }
}