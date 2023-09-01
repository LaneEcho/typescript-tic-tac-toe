export type Scoreboard = {
  X: number;
  O: number;
};

export type Player = 'X' | 'O';

export type BoardText = '-' | 'X' | 'O';

// array that can contain only strings of '-'  'X'  'O';
export type BoardContent = Array<BoardText>[];

// types for state object
export interface BoardState {
  board: BoardContent;
  currentPlayer: Player;
  gameOver: boolean;
  message: string;
  scoreboard: Scoreboard;
}

export type BoxProps = {
  text: BoardText;
  // row: number;
  // column: number;
  // handleBoxClick(row: number, column: number): void;
};

export type RowProps = {
  row: number;
  // content: BoardText[];
  // handleBoxClick(row: number, column: number): void;
};

export type ServerError = {
  log: string;
  status?: number;
  message: { err: string };
};
