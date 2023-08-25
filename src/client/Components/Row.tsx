import React from 'react';
import Box from './Box';
import { BoardText } from '../../types';

type RowProps = {
  row: number;
  content: BoardText[];
  handleBoxClick(row: number, column: number): void;
};

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
