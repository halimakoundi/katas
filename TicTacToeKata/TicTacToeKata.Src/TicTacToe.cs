namespace TicTacToeKata.Src
{
    public class TicTacToe
    {
        private string letter;
        private int column;
        private int row;

        public bool Play(string letter, int column, int row)
        {
            if (letter == this.letter && column == this.column && row == this.row)
            {
                return false;
            }
            this.letter = letter;
            this.row = row;
            this.column = column;
            return true;
        }

    }
}
