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
});

const envVariables = {
  DATABASE_URL: process.env.DATABASE_URL,
  CAR_API: process.env.CAR_API,
  AUTH_SECRET: process.env.AUTH_SECRET,
  AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
  AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
  JWT_SECRET: process.env.JWT_SECRET,
};

export const parsedEnv = validateWithSchema(envSchema, envVariables);
