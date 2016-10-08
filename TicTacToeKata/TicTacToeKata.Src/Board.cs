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

            if (ContainsThreeHorizontallyAdjacentLetters(new Letter("O"), Row.Top)
                || ContainsThreeVerticallyAdjacentLetters(new Letter("O"), Column.Center)
                || ContainsThreeVerticallyAdjacentLetters(new Letter("O"), Column.Left))
            {
                return GameResult.O_Wins;
            }

            if (ContainsThreeVerticallyAdjacentLetters(new Letter("X"), Column.Left)
                || ContainsThreeHorizontallyAdjacentLetters(new Letter("X"), Row.Top))
            {
                return GameResult.X_Wins;
            }
            return GameResult.DRAW;
        }

        private bool ContainsThreeVerticallyAdjacentLetters(Letter letter, Column adjacentColumn)
        {
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

        private bool ContainsThreeHorizontallyAdjacentLetters(Letter letter, Row adjacentRow)
        {
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

        public void ValidateCell(Cell cell)
        {
            if (_cells.Contains(cell))
            {
                throw new Exception("The cell is not empty");
            }
        }
    }
}