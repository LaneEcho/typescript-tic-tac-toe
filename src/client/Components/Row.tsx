import React, { useState } from 'react';
import Box from './Box';
import { BoardText, RowProps } from '../../types';

function Row(props: RowProps) {
  // will need to pass a prop for content and row number

  // doing boxes iteratively
  const boxes: JSX.Element[] = [];
  for (let i = 0; i < 3; i++) {
    boxes.push(
      <Box
        text={props.content[i]}
        row={props.row}
        column={i}
        handleBoxClick={props.handleBoxClick}
        key={i}
        gameOver={props.gameOver}
      />
    );
  }

  return <div className="row">{boxes}</div>;
}

export default Row;
