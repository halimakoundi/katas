using System;
using System.Collections.Generic;

namespace TicTacToeKata.Src
{
    public class Board
    {
        private readonly List<Cell> _cells = new List<Cell>();

        public void AddCell(Cell cell)
        {
            ValidateCell(cell);
            _cells.Add(cell);
        }

        public GameResult GetResult()
        {
            if (_cells.Count < 5)
            {
                return GameResult.IN_PROGRESS;
            }
            if (_cells.Count < 9)
            {
                return GameResult.X_Wins;
            }
            if (ContainsThreeAdjacentXs())
            {
                return GameResult.X_Wins;
            }
            return GameResult.DRAW;
        }

        private bool ContainsThreeAdjacentXs()
        {
            return _cells.Contains(new Cell(new Letter("X"), new Position(new Column(1), new Row(1))))
                   && _cells.Contains(new Cell(new Letter("X"), new Position(new Column(1), new Row(3))))
                   && _cells.Contains(new Cell(new Letter("X"), new Position(new Column(1), new Row(2))));
        }

        public void ValidateCell(Cell cell)
        {
            if (_cells.Contains(cell))
            {
                throw new Exception("The cell is not empty");
            }
        }
    }
}