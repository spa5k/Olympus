import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import pgSession from "connect-pg-simple";

export type GaiaContext = {
  req: Request & { session: { userId: string } };
  res: Response;
  prisma: PrismaClient;
  session: typeof pgSession;
};
