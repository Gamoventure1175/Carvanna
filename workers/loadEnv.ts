import { z } from "zod";
import dotenv from "dotenv";
import { fromZodError } from "zod-validation-error";

dotenv.config({ path: "./.env" });

const envSchema = z.object({
  REDIS_URL: z.string().url(),
  EMAIL_SERVER_HOST: z.string(),
  EMAIL_SERVER_PORT: z.number(),
  EMAIL_SERVER_USER: z.string(),
  EMAIL_SERVER_PASSWORD: z.string(),
  EMAIL_FROM: z.string(),
  
});

const envVariables = {
  REDIS_URL: process.env.REDIS_URL,
  EMAIL_SERVER_HOST: process.env.EMAIL_SERVER_HOST,
  EMAIL_SERVER_PORT: process.env.EMAIL_SERVER_PORT
    ? Number(process.env.EMAIL_SERVER_PORT)
    : undefined,
  EMAIL_SERVER_USER: process.env.EMAIL_SERVER_USER,
  EMAIL_SERVER_PASSWORD: process.env.EMAIL_SERVER_PASSWORD,
  EMAIL_FROM: process.env.EMAIL_FROM,
};

const validation = envSchema.safeParse(envVariables);

if (!validation.success) {
  console.log(fromZodError(validation.error));
  throw new Error("Validation Failed");
}

export const parsedEnv = validation.data;
