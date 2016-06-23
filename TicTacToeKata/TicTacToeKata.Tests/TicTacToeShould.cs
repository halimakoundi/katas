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

using System;
using NUnit.Framework;
using System.Collections.Generic;
using System.Linq.Expressions;
using TicTacToeKata.Src;

namespace TicTacToeKata.Tests
{
    [TestFixture]
    public class TicTacToeShould
    {
        private List<Cell> _turns;
        private TicTacToe _game;

        [TestCase("X", 1, 3, true)]
        public void add_an_X_to_the_board_on_given_coordinates(string letter, int column, int row, bool expected)
        {
            _game = new TicTacToe();
            _turns = new List<Cell>
            {
                new Cell(letter, column, row)
            };

            PlayAllTurns();

            Assert.That(_game.GetResult(), Is.EqualTo(GameResult.IN_PROGRESS));
        }

        private void PlayAllTurns()
        {
            foreach (var turn in _turns)
            {
                _game.Play(turn);
            }
        }

        [Test]
        public void not_add_a_letter_to_the_board_on_non_empty_positon()
        {
            _game = new TicTacToe();
            var letter = "X";
            var column = 1;
            var row = 2;
            var result = _game.Play(letter, column, row);

            result = _game.Play(letter, column, row);

            Assert.That(result, Is.EqualTo(false));
        }

        [Test]
        public void add_an_O_to_the_board_after_an_X_is_added_at_a_different_position()
        {
            _game = new TicTacToe();
            _turns = new List<Cell>
            {
                new Cell("X", 1, 2),
                new Cell("O", 3, 1)
            };

            PlayAllTurns();
            Assert.That(_game.GetResult(), Is.EqualTo(GameResult.IN_PROGRESS));
        }

        [Test]
        public void declare_game_as_draw_when_board_is_full_with_no_winner()
        {
            _game = new TicTacToe();
            _turns = new List<Cell>
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

            PlayAllTurns();

            Assert.That(_game.GetResult(), Is.EqualTo(GameResult.DRAW));
        }

        [Test]
        public void declare_X_as_winner_when_3_Xs_are_horizontally_adjacent()
        {
            _game = new TicTacToe();
            _turns = new List<Cell>
            {
                new Cell("X", 1, 1),
                new Cell("O", 3, 3),
                new Cell("X", 3, 1),
                new Cell("O", 2,2),
                new Cell("X", 2, 1)
            };

            PlayAllTurns();

            Assert.That(_game.GetResult(), Is.EqualTo(GameResult.X_Wins));
        }

        [Test]
        public void not_add_invalid_letter_to_the_board()
        {
            Assert.Throws(typeof(Exception),
            ()=> {
                     _game = new TicTacToe();
                     _turns = new List<Cell>
                     {
                         new Cell("Z", 1, 1)
                     };

                     PlayAllTurns();
            });
        }

    }
}
