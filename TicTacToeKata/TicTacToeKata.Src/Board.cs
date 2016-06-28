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
                if (ContainsThreeAdjacentOs())
                {
                    return GameResult.O_Wins;
                }
                return GameResult.X_Wins;
            }
            if (ContainsThreeAdjacentXs())
            {
                return GameResult.X_Wins;
            }
            return GameResult.DRAW;
        }

        private bool ContainsThreeAdjacentOs()
        {
            var letter = "O";
            var adjacentRow = Row.Top;

            var column = Column.Left;
            bool containsThreeAdjacentOs = true;
            for (var i = (int)column; i < 4; i++)
            {
                if (!_cells.Contains(new Cell(new Letter(letter), new Position(column, adjacentRow))))
                {
                    containsThreeAdjacentOs = false;
                }
            }

            return containsThreeAdjacentOs;
        }

        private bool ContainsThreeAdjacentXs()
        {
            var letter = "X";
            var adjacentColumn = Column.Left;

            var row = Row.Top;
            return _cells.Contains(new Cell(new Letter(letter), new Position(adjacentColumn, row)))
                   && _cells.Contains(new Cell(new Letter(letter), new Position(adjacentColumn, row + 1)))
                   && _cells.Contains(new Cell(new Letter(letter), new Position(adjacentColumn, row + 2)));
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