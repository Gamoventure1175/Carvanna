import { sendReminderEmail } from "@/lib/email/sendReminderEmail";
import {prisma} from "@/lib/prisma/prisma";
import { parsedEnv } from "@/validation/custom/env";
import { Job, Worker } from "bullmq";

export const serviceReminderWorker = new Worker(
  "service-reminder-queue",
  async (job: Job) => {
    const { userId, carId, serviceLogId, serviceTypeId, dueDate, notes } =
      job.data;

    const [user, car, serviceType, reminderJob] = await Promise.all([
      prisma.user.findUnique({ where: { id: userId } }),
      prisma.car.findUnique({ where: { id: carId } }),
      prisma.serviceType.findUnique({ where: { id: serviceTypeId } }),
      prisma.reminderJob.findFirst({
        where: {
          referenceId: serviceLogId.toString(),
          carId: carId,
        },
      }),
    ]);

    if (!user || !user.email || !user.username || !car || !serviceType) {
      if (process.env.NODE_ENV !== "production")
        console.error("Missing data in reminder job:", {
          user,
          car,
          serviceType,
        });
      throw new Error("Incomplete job data");
    }

    if (!reminderJob) {
      throw new Error(
        "ReminderJob not found for serviceLogId: " + serviceLogId,
      );
    }

    if (reminderJob.sent) {
      if (process.env.NODE_ENV !== "production")
        console.log(`Reminder email already sent for job ID ${reminderJob.id}`);
      return;
    }

    try {
      await sendReminderEmail({
        to: user.email,
        username: user.username,
        carName: `${car.brand} ${car.model}`,
        serviceName: serviceType.label,
        dueDate: new Date(dueDate),
        notes: notes,
      });

      await prisma.reminderJob.update({
        where: { id: reminderJob.id },
        data: { sent: true },
      });

      if (process.env.NODE_ENV !== "production")
        console.log(
          `Successfully sent reminder email for job ID ${reminderJob.id}`,
        );
    } catch (error) {
      if (process.env.NODE_ENV !== "production")
        console.error("Failed to send reminder email:", error);
      throw error;
    }
  },
  { connection: { url: parsedEnv.REDIS_URL } },
);
