import React, { useState } from 'react';
import { render } from 'react-dom';
import Board from './Components/Board';

import {
  Typography,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Button,
} from '@mui/material';

function App() {
  // State to manage the current theme mode
  const [darkMode, setDarkMode] = useState(false);

  // Create a light theme
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  // Create a dark theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  // Toggle the theme mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline /> {/* Normalize CSS */}
      <div className="app">
        <Typography variant="h1" color="primary">
          Tic-Tac-Toe
        </Typography>
        <Board />
        <Button
          onClick={toggleTheme}
          variant="outlined"
          style={{ marginTop: '10px' }}
          size="small"
        >
          {darkMode ? 'Light' : 'Dark'} Mode
        </Button>
      </div>
    </ThemeProvider>
  );
}

render(<App />, document.querySelector('#root'));
