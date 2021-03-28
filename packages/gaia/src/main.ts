import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { GaiaContext } from "./config/context";
import { createSchema } from "./config/schema";

const prisma = new PrismaClient({
  log: ["query", "info", `warn`, `error`],
});

const main = async () => {
  const app = express();

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
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
