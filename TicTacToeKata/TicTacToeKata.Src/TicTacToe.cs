using System;

namespace TicTacToeKata.Src
{
    public class TicTacToe
    {
        private Cell _cell;
        private GameResult _result = GameResult.IN_PROGRESS;

        private int _board;

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
            _board += 1;
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
