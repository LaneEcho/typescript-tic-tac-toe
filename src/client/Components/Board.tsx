import React, { Component } from 'react';
import Row from './Row';
import { BoardText, BoardContent, Scoreboard, Player } from './../../types';

type BoardState = {
  board: BoardContent;
  currentPlayer: Player;
  gameOver: boolean;
  message: string;
  scoreboard: Scoreboard;
};

// generic typing ensures whatever is typed as input is typed as output
class Board extends Component<{}, BoardState> {
  constructor(props: any) {
    super(props);
    this.state = {
      board: this.newBoard(),
      currentPlayer: 'X',
      gameOver: false,
      message: '',
      scoreboard: { X: 0, O: 0 },
    };

    // these methods need to be bound to the context of `this` since
    // these will be passed into event handlers and called from outside the object
    // where the context of `this` would be otherwise different
    this.resetBoard = this.resetBoard.bind(this);
    this.handleBoxClick = this.handleBoxClick.bind(this);
  }

  componentDidMount() {
    this.getScores();
  }

  componentDidUpdate() {
    this.checkForWinner();
  }

  /**
   * @method newBoard
   * @description - returns a blank BoardContent array,
   *  for the start of a new game
   */
  newBoard(): BoardContent {
    return [
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-'],
    ];
  }

  /**
   * @method resetBoard
   * @description - sets to board object to be all '-',
   *  and sets gameOver and message to default state
   */
  resetBoard(): void {
    this.setState({
      gameOver: false,
      board: this.newBoard(),
      message: '',
    });
  }

  /**
   * @method checkForWinner
   * @description - checks to see if either player has filled a row
   *  if so, ends the game and updates the message to declare winner
   */
  checkForWinner(): void {
    const { board, gameOver, currentPlayer } = this.state;

    // helper function to check if board is filled
    const spacesLeft = (): boolean => {
      for (let i of board) {
        if (i.includes('-')) return true;
      }
      return false;
    };

    if (!gameOver) {
      // win conditions: matching rows, columns, or diagonals, that are not empty('-')
      if (
        (board[0][0] === board[0][1] &&
          board[0][1] === board[0][2] &&
          board[0][2] !== '-') ||
        (board[1][0] === board[1][1] &&
          board[1][1] === board[1][2] &&
          board[1][2] !== '-') ||
        (board[2][0] === board[2][1] &&
          board[2][1] === board[2][2] &&
          board[2][2] !== '-') ||
        (board[0][0] === board[1][0] &&
          board[1][0] === board[2][0] &&
          board[2][0] !== '-') ||
        (board[0][1] === board[1][1] &&
          board[1][1] === board[2][1] &&
          board[2][1] !== '-') ||
        (board[0][2] === board[1][2] &&
          board[1][2] === board[2][2] &&
          board[2][2] !== '-') ||
        (board[0][0] === board[1][1] &&
          board[1][1] === board[2][2] &&
          board[2][2] !== '-') ||
        (board[2][0] === board[1][1] &&
          board[1][1] === board[0][2] &&
          board[0][2] !== '-')
      ) {
        // winner is the person who's turn was previous
        const winner: Player = currentPlayer === 'X' ? 'O' : 'X';

        this.setState({
          gameOver: true,
          message: `Player ${winner} wins!`,
        });

        this.getScores('POST', JSON.stringify({ winner }));

        // draw condition: no '-' remaining in board without above win condition triggering
      } else if (!spacesLeft()) {
        this.setState({
          gameOver: true,
          message: 'Draw!',
        });
      }
    }
  }

  getScores(method?: string, winner?: string) {}

  handleBoxClick() {}

  render() {
    // insert logic to render rows here

    // Destructure scores for X and O from state so that they can individually be rendered below
    const { X, O }: Scoreboard = this.state.scoreboard;

    return (
      <div className="board">
        {/* {rows} */}
        <button id="reset" onClick={this.resetBoard}>
          Reset
        </button>
        {/* The && operator here makes it so that the following JSX is only added if the expression is truthy */}
        {this.state.gameOver && <p>{this.state.message}</p>}
        <h4>Scoreboard:</h4>
        <p>X: {X}</p>
        <p>O: {O} </p>
      </div>
    );
  }
}

export default Board;