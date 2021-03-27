import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export type GaiaContext = {
  req: Request;
  res: Response;
  prisma: PrismaClient;
};
