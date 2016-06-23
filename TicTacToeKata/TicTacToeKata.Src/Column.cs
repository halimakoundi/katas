namespace TicTacToeKata.Src
{
    public class Column
    {
        private readonly int _column;

        public Column(int column)
        {
            _column = column;
        }

        public Column()
        {
        }

        public override bool Equals(object obj)
        {
            var otherColumn = (Column)obj;
            return _column == otherColumn._column;
        }
    }
}