import React, { useState } from 'react';
import { BoardText, BoxProps } from '../../types';

function Box(props: BoxProps) {
  return (
    <button
      className="box"
      onClick={props.handleBoxClick}
      data-row={props.row}
      data-column={props.column}
    >
      {props.text}
    </button>
  );
}

export default Box;
