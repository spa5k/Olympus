declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    NODEMAILER_USER: string;
    NODEMAILER_USER_PASSWORD: string;
    STRIPE_PUBLISHABLE_KEY: string;
    STRIPE_SECRET_KEY: string;
    POSTGRES_USER: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_DB: string;
    SUPPORT_EMAIL_ADDRESS: string;
    COOKIE_SECRET: string;
    COOKIE_NAME: string;
    GOLD_PLAN_ID: string;
    SILVER_PLAN_ID: string;
    COPPER_PLAN_ID: string;
    PORT: number;
  }
}
