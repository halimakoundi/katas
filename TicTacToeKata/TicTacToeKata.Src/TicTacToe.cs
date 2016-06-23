namespace TicTacToeKata.Src
{
    public class TicTacToe
    {
        private string _letter;
        private int _column;
        private int _row;

        public bool Play(string letter, int column, int row)
        {
            if (letter == _letter && column == _column && row == _row)
            {
                return false;
            }
            _letter = letter;
            _row = row;
            _column = column;
            return true;
        }

    }
}
