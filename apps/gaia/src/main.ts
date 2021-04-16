import 'dotenv-safe/config';
import 'reflect-metadata';

import { altairExpress } from 'altair-express-middleware';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import { PrismaClient } from '@prisma/client';
import { GaiaContext } from './config/context';
import { createSchema } from './config/schema';
import { sessionOptions } from './config/session';

const prisma = new PrismaClient({
  log: ['query', 'info', `warn`, `error`],
});

const main = async () => {
  const app = express();

  app.use(
    cors({
      origin: 'http://localhost:4200',
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
    '/altair',
    altairExpress({
      endpointURL: '/graphql',
      subscriptionsEndpoint: `ws://localhost:4000/subscriptions`,
    })
  );

  app.listen(4000, () => {
    console.log(`🚀 Server launched on address http://localhost:4000/graphql`);
    console.log(`🟢 Altair launched on address http://localhost:4000/altair`);
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
