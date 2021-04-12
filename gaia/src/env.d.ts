declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    NODEMAILER_USER: string;
    NODEMAILER_USER_PASSWORD: string;
    STRIPE_PUBLISHABLE_KEY: string;
    STRIPE_SECRET_KEY: string;
  }
}