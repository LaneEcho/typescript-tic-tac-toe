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
      />
    );
  }

  return <div className="row">{boxes}</div>;
}

// const Row2 = (props: RowProps) => {
//   const { content, row, handleBoxClick } = props;

//   const boxes: JSX.Element[] = content.map((box: any, i: any) => {
//     return (
//       <Box text={box} row={row} column={i} handleBoxClick={handleBoxClick} />
//     );
//   });

//   return <div className="row">{boxes}</div>;
// };

export default Row;
