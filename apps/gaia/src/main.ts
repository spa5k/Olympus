import "dotenv/config";
import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config({
  path: "env/gaia.env",
});

import { altairExpress } from "altair-express-middleware";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import session from "express-session";
import { PrismaClient } from "@prisma/client";
import { GaiaContext } from "./config/context";
import { createSchema } from "./config/schema";
import { sessionOptions } from "./config/session";
import { logger } from "@olympus/logger";

const prisma = new PrismaClient({
  log: ["query", "info", `warn`, `error`],
});

const main = async () => {
  const app = express();

  app.use(
    cors({
      origin: "http://localhost:4200",
      credentials: true,
    })
  );

  await app.use(session(sessionOptions));
  const schema = await createSchema();
  const server = new ApolloServer({
    context: ({ req, res }: GaiaContext) => ({
      res,
      req,
      prisma,
    }),
    schema,
  });

  server.applyMiddleware({ app, cors: false });

  app.use(
    "/altair",
    altairExpress({
      endpointURL: "/graphql",
      subscriptionsEndpoint: `ws://localhost:4000/subscriptions`,
    })
  );

  app.listen(process.env.PORT, () => {
    logger.silly(
      `🚀 Server launched on address http://localhost:${process.env.PORT}/graphql`
    );
    logger.silly(
      `🟢 Altair launched on address http://localhost:${process.env.PORT}/altair`
    );
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
