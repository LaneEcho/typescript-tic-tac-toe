import React from 'react';
import { BoardText, BoxProps } from '../../types';

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
