import React, { useState } from 'react';
import { BoardText, BoxProps } from '../../types';

function Box(props: BoxProps) {
  console.log(props);

  return (
    <button className="box" onClick={props.handleBoxClick}>
      {props.text}
    </button>
  );
}

export default Box;
