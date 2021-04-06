declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    WORKER_POOL_ENABLED: string;
    NODEMAILER_USER: string;
    NODEMAILER_USER_PASSWORD: string;
  }
}