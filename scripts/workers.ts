import { emailOTPWorker } from "@/lib/queues/email/emailWorker";;
import { serviceReminderWorker } from "@/lib/queues/service/serviceReminderWorker";

// Optionally: graceful shutdown handling
const shutdown = async () => {
  console.log("Shutting down workers...");

  await Promise.all([
    serviceReminderWorker.close(),
    emailOTPWorker.close(),
  ]);

  process.exit(0);
};

// Listen for system termination signals (for Docker, PM2, etc.)
process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

console.log("Workers are running...");
