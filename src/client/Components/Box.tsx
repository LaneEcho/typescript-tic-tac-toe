import React from 'react';
import { BoardText } from '../../types';

type BoxProps = {
  text: BoardText;
  row: number;
  column: number;
  handleBoxClick(row: number, column: number): void;
};

const Box = (props: BoxProps) => {
  // does infer some types
  const { text, row, column, handleBoxClick } = props;

  return (
    <button className="box" onClick={(): void => handleBoxClick(row, column)}>
      {text}
    </button>
  );
};

export default Box;
