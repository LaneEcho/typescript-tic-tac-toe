import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import { PlayerController, Player, Scoreboard } from '../types';

export const playerController: PlayerController = {
  getScores: async (req: Request, res: Response, next: NextFunction) => {},

  updateScores: async (req: Request, res: Response, next: NextFunction) => {},
};
