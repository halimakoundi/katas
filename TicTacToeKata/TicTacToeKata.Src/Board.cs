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
            var adjacentRow = Row.Top;
            var letter = new Letter("O");
            var column = Column.Left;

            bool containsThreeAdjacentLetters = true;
            for (var i = (int)column; i < 4; i++)
            {
                if (!_cells.Contains(new Cell(letter, new Position((Column)i, adjacentRow))))
                {
                    containsThreeAdjacentLetters = false;
                }
            }

            return containsThreeAdjacentLetters;
        }

        private bool ContainsThreeAdjacentXs()
        {
            var letter = new Letter("X");
            var adjacentColumn = Column.Left;
            var row = Row.Top;

            bool containsThreeAdjacentLetters = true;
            for (var i = (int)row; i < 4; i++)
            {
                if (!_cells.Contains(new Cell(letter, new Position(adjacentColumn, (Row)i))))
                {
                    containsThreeAdjacentLetters = false;
                }
            }
            return containsThreeAdjacentLetters;
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