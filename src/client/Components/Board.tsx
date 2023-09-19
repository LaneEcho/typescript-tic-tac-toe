import React, { Component, useState, useEffect } from 'react';
import Row from './Row';
import {
  BoardText,
  BoardState,
  BoardContent,
  Scoreboard,
  Player,
  RowProps,
} from './../../types';

import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WavingHandIcon from '@mui/icons-material/WavingHand';

// initial state of the board
const initialBoardState: BoardState = {
  board: [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-'],
  ],
  currentPlayer: 'X',
  gameOver: false,
  message: 'Start us off, player X!',
  scoreboard: { X: 0, O: 0 },
};

function Board() {
  const [boardState, setBoardState] = useState(initialBoardState);
  const [loading, setLoading] = useState(false);

  // object destructuring to assign X and O to variables of the same name to use later
  const { X, O }: Scoreboard = boardState.scoreboard;

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
      gameOver: false,
      message: "It's your turn!",
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
      const updatedMessage = `It's your turn, player ${updatedCurrentPlayer}!`;
      // new updated state object
      const updatedState: BoardState = {
        ...boardState,
        board: updatedBoard,
        currentPlayer: updatedCurrentPlayer,
        message: updatedMessage,
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

  function checkForWinner(): void {
    const board = boardState.board;

    // helper function to check if board is filled
    const spacesLeft = (): boolean => {
      for (let box of board) {
        if (box.includes('-')) return true;
      }
      return false;
    };

    // if the game is not over - check win conditions
    if (!boardState.gameOver) {
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
        const winner: Player = boardState.currentPlayer === 'X' ? 'O' : 'X';

        // update state
        const updatedState: BoardState = {
          ...boardState,
          gameOver: true,
          message: `Player ${winner} wins!`,
        };
        setBoardState(updatedState);

        // update scores
        // this.getScores('POST', JSON.stringify({ winner }));
      } else if (!spacesLeft()) {
        // win conditions not met, board is full - update state
        const updatedState: BoardState = {
          ...boardState,
          gameOver: true,
          message: `It's a draw!`,
        };
        setBoardState(updatedState);
      }
    }
  }

  // iterating to make Rows
  const rows: JSX.Element[] = [];
  for (let i = 0; i < 3; i++) {
    rows.push(
      <Row
        row={i}
        content={boardState.board[i]}
        handleBoxClick={handleBoxClick}
        key={i}
        gameOver={boardState.gameOver}
      />
    );
  }

  // check for winner when boardState changes
  useEffect(() => {
    checkForWinner();
  }, [boardState]);

  return (
    <div className="board">
      {boardState.gameOver && (
        <Alert
          variant="filled"
          iconMapping={{
            success: <EmojiEventsIcon fontSize="inherit" />,
          }}
          style={{
            justifyContent: 'center',
            backgroundColor:
              boardState.currentPlayer === 'X' ? '#00bfa5' : '#512da8',
            color: boardState.currentPlayer === 'X' ? '#000' : '#fff',
          }}
        >
          {boardState.message}
        </Alert>
      )}
      {!boardState.gameOver && (
        <Alert
          variant="filled"
          severity="info"
          iconMapping={{
            info: <WavingHandIcon fontSize="inherit" />,
          }}
          style={{
            justifyContent: 'center',
            width: '100%',
            backgroundColor:
              boardState.currentPlayer === 'X' ? '#512da8' : '#00bfa5',
            color: boardState.currentPlayer === 'X' ? '#fff' : '#000',
          }}
        >
          {boardState.message}
        </Alert>
      )}
      <div className="grid">{rows}</div>
      <Button
        variant="contained"
        size="large"
        className="resetButton"
        onClick={resetBoard}
      >
        Reset Board
      </Button>
      {/* <h4>Scoreboard:</h4>
      <p>X: {X}</p>
      <p>O: {O} </p> */}
    </div>
  );
}

export default Board;
