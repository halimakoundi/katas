using System;

namespace TicTacToeKata.Src
{
    public class TicTacToe
    {
        private Cell _cell;
        private GameResult _result = GameResult.IN_PROGRESS;

        private readonly Board _board = new Board();

        private void ValidateCell(Cell cell)
        {
            if (_cell != null && _cell.Equals(cell))
            {
                throw new Exception("The cell is not empty");
            }
            _cell = cell;
        }

        public void Play(Cell cell)
        {
            ValidateCell(cell);
            _board.AddCell(cell);
        }

        public GameResult GetResult()
        {
           return _board.GetResult();
        }
    }
}
