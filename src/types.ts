// type aliases

export type Scoreboard = {
  X: number;
  O: number;
};

export type Player = 'X' | 'O';

export type BoardText = '-' | 'X' | 'O';

export type BoardContent = Array<BoardText>[];

export type BoxProps = {
  text: BoardText;
  row: number;
  column: number;
  handleBoxClick(row: number, column: number): void;
};

export type RowProps = {
  row: number;
  content: BoardText[];
  handleBoxClick(row: number, column: number): void;
};

export type ServerError = {
  log: string;
  status?: number;
  message: { err: string };
};
