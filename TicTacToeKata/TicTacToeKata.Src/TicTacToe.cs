namespace TicTacToeKata.Src
{
    public class TicTacToe
    {
        private Cell _cell = new Cell();
        private GameResult _result = GameResult.IN_PROGRESS;

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
            return GameResult.DRAW;
        }

        public void Play(Cell cell)
        {
        }
    }
}
