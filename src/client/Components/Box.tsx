import React, { useState } from 'react';
import { BoardText, BoxProps } from '../../types';

function Box(props: BoxProps) {
  // function changeBox(): void {
  //   if (boxText === '-') {
  //     setBoxText('X');
  //   } else if (boxText === 'X') {
  //     setBoxText('O');
  //   } else {
  //     setBoxText('-');
  //   }
  // }

  return (
    <button className="box" onClick={null}>
      {props.text}
    </button>
  );
}

export default Box;
