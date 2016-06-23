namespace TicTacToeKata.Src
{
    public class TicTacToe
    {
        private Cell _cell = new Cell();
        private GameResult _result = GameResult.IN_PROGRESS;
        private int _board;

        public bool Play(string letter, int column, int row)
        {
            if (!_cell.Equals(new Cell(letter, column, row)))
            {
                _cell = new Cell(letter, column, row);
                return true;
            }
            return false;
        }

        public GameResult GetResult()
        {
            if (_board < 9)
            {
                return  GameResult.X_Wins;
            }
            return GameResult.DRAW;
        }

        public void Play(Cell cell)
        {
            this._board += 1;
        }
    }
}
