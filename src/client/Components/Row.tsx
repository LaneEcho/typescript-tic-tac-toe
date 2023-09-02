import React, { useState } from 'react';
import Box from './Box';
import { BoardText, RowProps } from '../../types';

function Row(props: RowProps) {
  // will need to pass a prop for content and row number

  return (
    <div className="row">
      <Box text={props.content[0]} />
      <Box text={props.content[1]} />
      <Box text={props.content[2]} />
    </div>
  );
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
