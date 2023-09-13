import React from 'react';
import { render } from 'react-dom';
import Board from './Components/Board';

import { Typography } from '@mui/material';

function App() {
  return (
    <div>
      <Typography variant="h1" color="primary">
        Tic-Tac-Toe
      </Typography>
      <Board />
    </div>
  );
}

render(<App />, document.querySelector('#root'));
