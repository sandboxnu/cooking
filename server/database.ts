import ServerlessClient from "serverless-postgres";

export const connection = new ServerlessClient({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  debug: true,
  delayMs: 3000,
});
