import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import { PlayerController, Player, Scoreboard } from '../types';

export const playerController: PlayerController = {
  // getScores method
  getScores: async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Read the db.json file

      next();
    } catch (err) {
      // Handle any errors that occur during file reading or JSON parsing
      console.error('Error reading db.json:', err);
      res.status(500).send('Internal Server Error');
    }
  },

  updateScores: async (req: Request, res: Response, next: NextFunction) => {},
};
