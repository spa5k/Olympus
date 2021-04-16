import { PrismaClient } from '@prisma/client';
import pgSession from 'connect-pg-simple';
import { Request, Response } from 'express';

export type GaiaContext = {
  req: Request & { session: { userId: string } };
  res: Response;
  prisma: PrismaClient;
  session: typeof pgSession;
};
