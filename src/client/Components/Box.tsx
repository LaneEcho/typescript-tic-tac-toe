import React, { useState } from 'react';
import { BoardText, BoxProps } from '../../types';

function Box(props: BoxProps) {
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
      {boxText}
    </button>
  );
}

// const Box2 = (props: BoxProps) => {
//   // does infer some types
//   // const { text, row, column, handleBoxClick } = props;

//   return (
//     <button className="box" onClick={(): void => handleBoxClick(row, column)}>
//       {text}
//     </button>
//   );
// };

export default Box;
