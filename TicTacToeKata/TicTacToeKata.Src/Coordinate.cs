namespace TicTacToeKata.Src
{
    public class Coordinate
    {
        protected internal int _coordinate;

        public override bool Equals(object obj)
        {
            var otherColumn = (Coordinate)obj;
            return _coordinate == otherColumn._coordinate;
        }
    }
}