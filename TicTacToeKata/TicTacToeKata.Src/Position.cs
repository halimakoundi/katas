﻿using System;

namespace TicTacToeKata.Src
{
    public class Position
    {
        private readonly Coordinate _column;
        private readonly Row _row;

        public Position(int column, int row)
        {
            _column = new Column(column);
            _row = new Row(row);
        }

        public override bool Equals(object obj)
        {
            var otherPosition = (Position)obj;
            return _column.Equals(otherPosition._column)
                   && _row.Equals( otherPosition._row);
        }
    }
}