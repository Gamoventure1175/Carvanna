import { serviceReminderQueue } from "./serviceReminderQueue";

export async function createReminderJob({
  userId,
  carId,
  serviceLogId,
  serviceTypeId,
  dueDate,
  notes,
}: {
  userId: string;
  carId: string;
  serviceLogId: string;
  serviceTypeId: number;
  dueDate: Date;
  notes: string;
}) {
  await serviceReminderQueue.add(
    "send-service-reminder-email",
    {
      userId,
      carId,
      serviceLogId,
      serviceTypeId,
      notes,
    },
    {
      delay: dueDate.getTime() - Date.now(),
      jobId: `reminder-${carId}-${serviceLogId}`,
      removeOnComplete: true,
      attempts: 3,
      backoff: { type: "exponential", delay: 1000 },
    },
  );
}
