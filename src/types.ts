import { RequestHandler } from 'webpack-dev-server';

export type Scoreboard = {
  X: number;
  O: number;
};

export type Player = 'X' | 'O';

export type BoardText = '-' | Player;

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
  row: number;
  column: number;
  handleBoxClick(event: React.MouseEvent<HTMLButtonElement>): void;
};

export type RowProps = {
  row: number;
  content: BoardText[];
  handleBoxClick(event: React.MouseEvent<HTMLButtonElement>): void;
};

export type ServerError = {
  log: string;
  status?: number;
  message: { err: string };
};

export interface PlayerController {
  getScores: RequestHandler;
  updateScores: RequestHandler;
}
