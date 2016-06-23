namespace TicTacToeKata.Src
{
    public class TicTacToe
    {
        private Cell _cell;
        private GameResult _result = GameResult.IN_PROGRESS;
        private int _board;

        public bool Play(string letter, int column, int row)
        {
            if (ValidateCell(new Cell(new Letter(letter), new Position(new Column(column), new Row(row))))) return true;
            return false;
        }

        private bool ValidateCell(Cell cell)
        {
            if (_cell != null && !_cell.Equals(cell))
            {
                _cell = cell;
                return true;
            }
            return false;
        }

        public void Play(Cell cell)
        {
            this._board += 1;
        }

        public GameResult GetResult()
        {
            if (_board < 5)
            {
                return _result;
            }
            if (_board < 9)
            {
                return GameResult.X_Wins;
            }
            return GameResult.DRAW;
        }
    }
}
