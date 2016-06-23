/*with Object Calisthenics
Object Calisthenics, 9 steps to better software design
• Only one level of indentation per method
• Don't use the ELSE keyword
• Wrap all primitives and strings, if it has behaviour
• First class collections
• One dot per line
• Don't abbreviate
• Keep all entities small
• No classes with more than two instance variables
• No getters/setters/properties
 */

using NUnit.Framework;
using System.Collections.Generic;
using System.Linq.Expressions;
using TicTacToeKata.Src;

namespace TicTacToeKata.Tests
{
    [TestFixture]
    public class TicTacToeShould
    {
        [TestCase("X", 1, 3, true)]
        public void add_an_X_to_the_board_on_given_coordinates(string letter, int column, int row, bool expected)
        {
            var game = new TicTacToe();
            Assert.AreEqual(expected, game.Play(letter, column, row));
        }

        [Test]
        public void not_add_a_letter_to_the_board_on_non_empty_positon()
        {
            var game = new TicTacToe();
            var letter = "X";
            var column = 1;
            var row = 2;
            var result = game.Play(letter, column, row);

            result = game.Play(letter, column, row);

            Assert.That(result, Is.EqualTo(false));
        }

        [Test]
        public void add_an_O_to_the_board_after_an_X_is_added_at_a_different_position()
        {
            var game = new TicTacToe();
            var letter = "X";
            var column = 1;
            var row = 2;
            game.Play(letter, column, row);

            letter = "O";
            column = 3;
            row = 1;
            var result = game.Play(letter, column, row);

            Assert.That(result, Is.EqualTo(true));
        }

        [Test]
        public void declare_game_as_draw_when_board_is_full_with_no_winner()
        {
            var game = new TicTacToe();
            var turns = new List<Cell>
            {
                new Cell("X", 1, 1),
                new Cell("O", 3, 3),
                new Cell("X", 1, 3),
                new Cell("O", 3, 1),
                new Cell("X", 3, 2),
                new Cell("O", 1, 2),
                new Cell("X", 2, 2),
                new Cell("O", 2, 1),
                new Cell("X", 2, 3)
            };

            var index = 0;
            while (index < 9)
            {
                game.Play(turns[index]);
                index += 1;
            }

            Assert.That(game.GetResult(), Is.EqualTo(GameResult.DRAW));
        }

    }
}
