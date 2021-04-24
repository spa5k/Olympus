declare namespace NodeJS {
  interface ProcessEnv {
    STRIPE_PUBLISHABLE_KEY: string;
    STRIPE_SECRET_KEY: string;
  }
}
