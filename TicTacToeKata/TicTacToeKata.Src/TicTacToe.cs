﻿namespace TicTacToeKata.Src
{
    public class TicTacToe
    {
        private Cell _cell = new Cell();

        public bool Play(string letter, int column, int row)
        {
            if (_cell.IsEmpty())
            {
                _cell = new Cell(letter, column, row);
                return true;
            }
            return false;
        }

    }
}
