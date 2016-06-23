namespace TicTacToeKata.Src
{
    public class TicTacToe
    {
        private GameResult _result = GameResult.IN_PROGRESS;

        private readonly Board _board = new Board();

        public void Play(Cell cell)
        {
            _board.AddCell(cell);
        }

        public GameResult GetResult()
        {
           return _board.GetResult();
        }
    }
}
