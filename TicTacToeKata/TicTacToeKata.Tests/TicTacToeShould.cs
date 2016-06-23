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
        [TestCase("X",1,3)]
        public void add_an_X_to_the_board_on_given_coordinates(string letter, int column, int row)
        {
            var game = new TicTacToe();
            Assert.AreEqual(true, game.Play(letter, column, row));
        }
        
    }
}
