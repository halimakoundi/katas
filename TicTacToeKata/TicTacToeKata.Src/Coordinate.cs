using System;

namespace TicTacToeKata.Src
{
    public class Coordinate
    {
        protected internal int _coordinate;

        public Coordinate(int coordinate)
        {
            ValidateCoordinate(coordinate);
            _coordinate = coordinate;
        }

        private void ValidateCoordinate(int coordinate)
        {
            if (coordinate > 3 || coordinate < 0)
            {
                throw new Exception($"Invalid coordinate : {coordinate}");
            }
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