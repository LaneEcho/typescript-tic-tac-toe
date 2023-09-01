import React from 'react';
import { BoardText, BoxProps } from '../../types';

function Box(props: BoxProps) {
  return (
    <button className="box" onClick={null}>
      {'X'}
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
