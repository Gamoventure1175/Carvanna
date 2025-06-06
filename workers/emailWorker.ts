import { Job, Worker } from "bullmq";
import { parsedEnv } from "./loadEnv";
import {sendOtpEmail} from '../lib/email/sendOtpEmail'
import Redis from "ioredis";

const redis = new Redis(parsedEnv.REDIS_URL, {maxRetriesPerRequest: null})

export const emailOTPWorker = new Worker(
  "email-otp-queue",
  async (job: Job) => {
    const { to, username, otp } = job.data;
    await sendOtpEmail(to, username, otp, parsedEnv.EMAIL_SERVER_USER);
  },
  {
    connection: redis,
  }
);
