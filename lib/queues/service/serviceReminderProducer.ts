import { serviceReminderQueue } from "./serviceReminderQueue";

export async function createReminderJob({
  userId,
  carId,
  serviceLogId,
  serviceTypeId,
  dueDate,
}: {
  userId: number;
  carId: number;
  serviceLogId: number;
  serviceTypeId: number;
  dueDate: Date;
}) {
  await serviceReminderQueue.add(
    "send-service-reminder-email",
    {
      userId,
      carId,
      serviceLogId,
      serviceTypeId,
    },
    {
      delay: dueDate.getTime() - Date.now(),
      jobId: `reminder-${carId}-${serviceLogId}`,
      removeOnComplete: true,
      attempts: 3,
      backoff: { type: "exponential", delay: 1000 },
    }
  );
}
