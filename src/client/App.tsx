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

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#8E24AA',
        dark: '#512da8',
        contrastText: '#fff',
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#69F0AE',
        dark: '#00BFA5',
        contrastText: '#000',
      },
    },
  });

  // Toggle the theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline /> {/* Normalize CSS */}
      <div className="app">
        <Typography
          variant="h1"
          color="primary"
          style={{
            fontSize: '5rem',
            marginBottom: '10px',
            textAlign: 'center',
          }}
        >
          Tic-Tac-Toe
        </Typography>
        <Board />
        <Button
          className="toggleButton"
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
