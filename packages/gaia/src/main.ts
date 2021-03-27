import { ApolloServer } from "apollo-server-express";
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { makeSchema, nullable, objectType, queryType, stringArg } from "nexus";
import path from "path";
import { GaiaContext } from "./config/context";

const { env } = process;
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
  const schema = makeSchema({
    sourceTypes: {
      modules: [{ module: ".prisma/client", alias: "PrismaClient" }],
    },
    outputs: {
      typegen: path.join(
        __dirname,
        "node_modules/@types/nexus-typegen/index.d.ts"
      ),
      schema: path.join(__dirname, "./api.graphql"),
    },
    shouldExitAfterGenerateArtifacts: Boolean(
      process.env.NEXUS_SHOULD_EXIT_AFTER_REFLECTION
    ),
    types: [
      objectType({
        name: "User",
        definition(t) {
          t.id("id");
          t.string("name", {
            resolve(parent) {
              return parent.name;
            },
          });
        },
      }),
      queryType({
        definition(t) {
          t.list.field("users", {
            type: "User",
            args: {
              world: nullable(stringArg()),
            },
            resolve(_root, _args, ctx) {
              return ctx.prisma.user.findMany();
            },
          });
        },
      }),
    ],
  });

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
