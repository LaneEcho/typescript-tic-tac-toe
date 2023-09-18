import React, { useState } from 'react';
import { BoardText, BoxProps } from '../../types';

import Button from '@mui/material/Button';

function Box(props: BoxProps) {
  return (
    <Button
      variant="outlined"
      className="box"
      onClick={props.handleBoxClick}
      data-row={props.row}
      data-column={props.column}
      style={{ fontSize: '75px' }}
      disabled={props.gameOver}
      sx={{
        '&.Mui-disabled': {
          color: '#1976d2',
          border: '1px solid #1976d2',
          // come back to this and make it look disabled
        },
      }}
    >
      {props.text}
    </Button>
  );
}

export default Box;
