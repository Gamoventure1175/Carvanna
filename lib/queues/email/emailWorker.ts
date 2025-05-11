import { Job, Worker } from "bullmq";
import { sendOtpEmail } from "../../email/sendOtpEmail";
import { parsedEnv } from "@/validation/custom/env";

export const emailOTPWorker = new Worker(
  "email-otp-queue",
  async (job: Job) => {
    const { to, username, otp } = job.data;
    await sendOtpEmail(to, username, otp);
  },
  {
    connection: { url: parsedEnv.REDIS_URL },
  },
);
