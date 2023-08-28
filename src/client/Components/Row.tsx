import React from 'react';
import Box from './Box';
import { BoardText, RowProps } from '../../types';

const Row = (props: RowProps) => {
  const { content, row, handleBoxClick } = props;

  const boxes: JSX.Element[] = content.map((box, i) => {
    return (
      <Box text={box} row={row} column={i} handleBoxClick={handleBoxClick} />
    );
  });

  return <div className="row">{boxes}</div>;
};

export default Row;
