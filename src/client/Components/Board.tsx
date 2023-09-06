import React, { Component, useState } from 'react';
import Row from './Row';
import {
  BoardText,
  BoardState,
  BoardContent,
  Scoreboard,
  Player,
  RowProps,
} from './../../types';

// initial state of the board - is this relevant with the hook setup?
const initialBoardState: BoardState = {
  board: [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-'],
  ],
  currentPlayer: 'X',
  gameOver: false,
  message: "It's your turn!",
  scoreboard: { X: 0, O: 0 },
};

function Board() {
  const [boardState, setBoardState] = useState(initialBoardState);

  // object destructuring to assign X and O to variables of the same name to use later
  const { X, O }: Scoreboard = boardState.scoreboard;

  // will need a useEffect to check for winner

  // will need useEffect to get scores

  /**
   * @method resetBoard
   * @description - sets to board object to be all '-',
   *  and prepares board for new game
   */

  function resetBoard(): void {
    // make copy of state
    const updatedState: BoardState = {
      ...boardState,
      board: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-'],
      ],
      currentPlayer: 'X',
      // gameOver: false,
      // message: "It's your turn!",
      // scoreboard: { X: 0, O: 0 },
    };
    // update the values
    setBoardState(updatedState);
  }

  /**
   * @method handleBoxClick
   * @description - updates text value inside each box and updates current player
   */

  const handleBoxClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    // accessing button properties which will be used to update state (and turning them to number type)
    const row: number = Number(event.currentTarget.dataset.row);
    const column: number = Number(event.currentTarget.dataset.column);

    // and updating the state
    if (boardState.board[row][column] === '-') {
      // new copy of board array
      const updatedBoard = [...boardState.board];
      // changing value to whatever currentPlayer is
      updatedBoard[row][column] = boardState.currentPlayer;
      // update the currentPlayer to opposite value
      const updatedCurrentPlayer = boardState.currentPlayer === 'X' ? 'O' : 'X';
      // new updated state object
      const updatedState: BoardState = {
        ...boardState,
        board: updatedBoard,
        currentPlayer: updatedCurrentPlayer,
      };
      // actually update the state with the new board state
      setBoardState(updatedState);
    } else alert("Choose a different box, this one's taken!");
  };

  /**
   * @method checkForWinner
   * @description - checks to see if either player has filled a row
   *  if so, ends the game and updates the message to declare winner
   */

  //   checkForWinner(): void {
  //     const { board, gameOver, currentPlayer } = this.state;

  //     // helper function to check if board is filled
  //     const spacesLeft = (): boolean => {
  //       for (let i of board) {
  //         if (i.includes('-')) return true;
  //       }
  //       return false;
  //     };

  //     if (!gameOver) {
  //       // win conditions: matching rows, columns, or diagonals, that are not empty('-')
  //       if (
  //         (board[0][0] === board[0][1] &&
  //           board[0][1] === board[0][2] &&
  //           board[0][2] !== '-') ||
  //         (board[1][0] === board[1][1] &&
  //           board[1][1] === board[1][2] &&
  //           board[1][2] !== '-') ||
  //         (board[2][0] === board[2][1] &&
  //           board[2][1] === board[2][2] &&
  //           board[2][2] !== '-') ||
  //         (board[0][0] === board[1][0] &&
  //           board[1][0] === board[2][0] &&
  //           board[2][0] !== '-') ||
  //         (board[0][1] === board[1][1] &&
  //           board[1][1] === board[2][1] &&
  //           board[2][1] !== '-') ||
  //         (board[0][2] === board[1][2] &&
  //           board[1][2] === board[2][2] &&
  //           board[2][2] !== '-') ||
  //         (board[0][0] === board[1][1] &&
  //           board[1][1] === board[2][2] &&
  //           board[2][2] !== '-') ||
  //         (board[2][0] === board[1][1] &&
  //           board[1][1] === board[0][2] &&
  //           board[0][2] !== '-')
  //       ) {
  //         // winner is the person who's turn was previous
  //         const winner: Player = currentPlayer === 'X' ? 'O' : 'X';

  //         this.setState({
  //           gameOver: true,
  //           message: `Player ${winner} wins!`,
  //         });

  //         this.getScores('POST', JSON.stringify({ winner }));

  //         // draw condition: no '-' remaining in board without above win condition triggering
  //       } else if (!spacesLeft()) {
  //         this.setState({
  //           gameOver: true,
  //           message: 'Draw!',
  //         });
  //       }
  //     }
  //   }

  //   getScores(method?: string, winner?: string) {}

  // iterating to make Rows
  const rows: JSX.Element[] = [];
  for (let i = 0; i < 3; i++) {
    rows.push(
      <Row
        row={i}
        content={boardState.board[i]}
        handleBoxClick={handleBoxClick}
        key={i}
      />
    );
  }

  return (
    <div className="board">
      <div className="grid">{rows}</div>
      <button id="reset" onClick={resetBoard}>
        Reset Board
      </button>

      {/* The && operator here makes it so that the following JSX is only added if the expression is truthy */}
      {/* {this.state.gameOver && <p>{this.state.message}</p>} */}
      <h4>Scoreboard:</h4>
      <p>X: {X}</p>
      <p>O: {O} </p>
    </div>
  );
}

export default Board;
