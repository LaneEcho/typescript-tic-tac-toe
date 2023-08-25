import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import { Player, Scoreboard } from '../types';
import { RequestHandler } from 'webpack-dev-server';

interface playerController {
  getScores: RequestHandler;
}

export const playerController = {
  getScores: () => {},

  updateScores: () => {},
};
