namespace TicTacToeKata.Src
{
    public class Column : Coordinate
    {
        public Column(int coordinate)
        {
            _coordinate = coordinate;
        }

        public Column()
        {
        }

        public override bool Equals(object obj)
        {
            var otherColumn = (Coordinate)obj;
            return _coordinate == otherColumn._coordinate;
        }
    }
}