import React from 'react';
import { render } from 'react-dom';
import Board from './Components/Board';

function App() {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  );
}

render(<App />, document.querySelector('#root'));
