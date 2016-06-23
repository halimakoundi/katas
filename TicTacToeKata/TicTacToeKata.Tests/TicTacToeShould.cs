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

    }
}
