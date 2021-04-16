/**
 * Production Nextjs custom server
 *
 * Usage: run this script with node
 * Adjust dir option for your serve/deploy config
 *
 * node server.js
 */

/**
 * @typedef {import('next/dist/next-server/server/next-server').default} Server
 */

const NextServer = require('next/dist/next-server/server/next-server').default;
const express = require('express');

const nextApp = new NextServer({
  dir: './dist/apps/<%= name %>',
  staticMarkup: false,
  quiet: false,
  conf: {
    distDir: '.',
  },
});

const serve = async () => {
  const handle = nextApp.getRequestHandler();
  const expressApp = express();

  await nextApp.prepare();

  return new Promise((resolve, reject) => {
    expressApp.all('*', (req, res) => {
      return handle(req, res);
    });

    const server = expressApp.listen(4200, (err) => {
      err ? reject(err) : resolve(server);
    });
  });
};

serve().then((server) => console.log('Server is running on port 4200'));
