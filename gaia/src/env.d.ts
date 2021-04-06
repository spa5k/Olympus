declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    WORKER_POOL_ENABLED: string;
  }
}