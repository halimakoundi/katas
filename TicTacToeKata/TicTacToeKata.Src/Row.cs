namespace TicTacToeKata.Src
{
    public class Row
    {
        private readonly int _row;

        public Row(int row)
        {
            _row = row;
        }

        public Row()
        {
        }

        public override bool Equals(object obj)
        {
            var otherRow = (Row)obj;
            return _row == otherRow._row;
        }
    }
}