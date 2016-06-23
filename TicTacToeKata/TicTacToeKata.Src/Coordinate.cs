namespace TicTacToeKata.Src
{
    public class Coordinate
    {
        protected internal int _coordinate;

        public Coordinate(int coordinate)
        {
            _coordinate = coordinate;
        }

        protected Coordinate()
        {
        }

        public override bool Equals(object obj)
        {
            var otherColumn = (Coordinate)obj;
            return _coordinate == otherColumn._coordinate;
        }
    }
}