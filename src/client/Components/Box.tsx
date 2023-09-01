import React, { useState } from 'react';
import { BoardText, BoxProps } from '../../types';

function Box(props: BoxProps) {
  // might want to pass down state from row?
  const [boxText, setBoxText] = useState('-');

  function changeBox(): void {
    if (boxText === '-') {
      setBoxText('X');
    } else if (boxText === 'X') {
      setBoxText('O');
    } else {
      setBoxText('-');
    }
  }

  return (
    <button className="box" onClick={changeBox}>
      {props.text}
    </button>
  );
}

export default Box;
