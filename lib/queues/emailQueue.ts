import { parsedEnv } from "@/validation/custom/env";
import { Queue } from "bullmq";

export const emailQueue = new Queue("email-otp-queue", {
  connection: {
    url: parsedEnv.REDIS_URL,
  },
});
