import { parsedEnv } from "@/validation/custom/env";
import Redis from "ioredis";

const redis = new Redis(parsedEnv.REDIS_URL);

export async function generateAndStoreOtp(email: string): Promise<string> {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  await redis.set(`otp:${email}`, otp, "EX", 600); // expires in 10 min
  return otp;
}

export async function verifyOtp(
  email: string,
  inputOtp: string,
): Promise<boolean> {
  const storedOtp = await redis.get(`otp:${email}`);
  return storedOtp === inputOtp;
}

export async function deleteOtp(email: string): Promise<boolean> {
  const result = await redis.del(`otp:${email}`);
  return result === 1 ? true : false;
}
