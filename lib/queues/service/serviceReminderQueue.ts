import { parsedEnv } from "@/validation/custom/env";
import { Queue } from "bullmq";

export const serviceReminderQueue = new Queue("service-reminder-queue", {
    connection: {
        url: parsedEnv.REDIS_URL
    }
})