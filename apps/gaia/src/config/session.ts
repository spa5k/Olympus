import session, { SessionOptions } from "express-session";

import pgSessionStore from "connect-pg-simple";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pg = pgSessionStore(session);

const store = new pg({
  conString: process.env.DATABASE_URL,
  schemaName: "gaia",
});

export const sessionOptions: SessionOptions = {
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7 * 365,
    secure: false,
  },
  name: "olympus",
  saveUninitialized: false,
  store,
  resave: false,
  secret: process.env.COOKIE_SECRET,
};
