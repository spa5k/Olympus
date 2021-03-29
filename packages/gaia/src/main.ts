import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { GaiaContext } from "./config/context";
import { createSchema } from "./config/schema";
import session from "express-session";
import pgSession from "connect-pg-simple";

const prisma = new PrismaClient({
  log: ["query", "info", `warn`, `error`],
});

const main = async () => {
  const app = express();
  const pg = pgSession(session);

  const store = new pg({
    conString: process.env.DATABASE_URL,
  });

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.use(
    session({
      store,
      secret: "niceoooooooooooooooooo",
      resave: false,
      cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
      name: "prisma_id",
      saveUninitialized: false,
    })
  );

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

  app.listen(4000, () => {
    console.log(`🚀 Server launched on address http://localhost:4000/graphql`);
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
