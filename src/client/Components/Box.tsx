import React, { useState } from 'react';
import { BoardText, BoxProps } from '../../types';

function Box(props: BoxProps) {
  console.log(props);

  // this lets us access the row/ column props but not how I want
  // const handleBoxClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
  //   // Access the button's properties using event.currentTarget
  //   // const buttonText = event.currentTarget;
  //   const row: number = props.row;
  //   const column: number = props.column;
  //   // console.log('Button Text:', buttonText);
  //   console.log(column);
  // };

  return (
    <button className="box" onClick={props.handleBoxClick}>
      {props.text}
    </button>
  );
}

export default Box;
