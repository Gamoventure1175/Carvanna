import dotenv from "dotenv";
import validateWithSchema from "@/utility/zod/validateWithSchema";
import { z } from "zod";

dotenv.config({ path: "./.env" });

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  CAR_API: z.string().url(),
  AUTH_SECRET: z.string().min(32),
  AUTH_GOOGLE_ID: z.string(),
  AUTH_GOOGLE_SECRET: z.string(),
  JWT_SECRET: z.string(),
  EMAIL_SERVER_HOST: z.string(),
  EMAIL_SERVER_PORT: z.number(),
  EMAIL_SERVER_USER: z.string(),
  EMAIL_SERVER_PASSWORD: z.string(),
  EMAIL_FROM: z.string(),
  REDIS_URL: z.string(),
});

const envVariables = {
  DATABASE_URL: process.env.DATABASE_URL,
  CAR_API: process.env.CAR_API,
  AUTH_SECRET: process.env.AUTH_SECRET,
  AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
  AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
  JWT_SECRET: process.env.JWT_SECRET,
  EMAIL_SERVER_HOST: process.env.EMAIL_SERVER_HOST,
  EMAIL_SERVER_PORT: process.env.EMAIL_SERVER_PORT
    ? Number(process.env.EMAIL_SERVER_PORT)
    : undefined,
  EMAIL_SERVER_USER: process.env.EMAIL_SERVER_USER,
  EMAIL_SERVER_PASSWORD: process.env.EMAIL_SERVER_PASSWORD,
  EMAIL_FROM: process.env.EMAIL_FROM,
  REDIS_URL: process.env.REDIS_URL,
};

if (typeof window !== "undefined") {
  throw new Error("env.ts should not be imported on the client");
}

export const parsedEnv = validateWithSchema(envSchema, envVariables);
