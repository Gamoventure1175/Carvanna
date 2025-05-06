"use server";

import prisma from "@/lib/prisma/prisma";
import { createReminderJob } from "@/lib/queues/service/serviceReminderProducer";
import { serviceLogFormSchemaType } from "@/validation/custom/serviceLog";

export default async function addServiceLogAction(
  formData: serviceLogFormSchemaType
) {
  const { carId, serviceTypeId, serviceDate } = formData;
  const serviceType = await prisma.serviceType.findUnique({
    where: { id: serviceTypeId },
  });

  if (!serviceType) {
    throw new Error("Invalid service type");
  }

  const serviceLog = await prisma.serviceLog.create({
    data: formData,
    include: {
      car: {
        include: {
          owner: true,
        },
      },
    },
  });

  if (process.env.NODE_ENV !== "production")
    console.log("Created a service log");

    if (serviceType.intervalDays === null) {
        throw new Error("Service type is missing interval days")
    }

  const nextDueDate = new Date(serviceDate);
  nextDueDate.setDate(nextDueDate.getDate() + serviceType.intervalDays ?? 0);

  await createReminderJob({
    carId: carId,
    serviceLogId: serviceLog.id,
    serviceTypeId: serviceType.id,
    userId: serviceLog.car.ownerId,
    dueDate: nextDueDate
  })

  if (process.env.NODE_ENV !== "production")
    console.log("Created a service reminder job");

    const reminderJob = await prisma.reminderJob.create({
        data: {
            carId: carId,
            userId: serviceLog.car.ownerId,
            sent: false,
            type: 'SERVICE',
            referenceId: serviceLog.id.toString(),
            scheduledAt: nextDueDate
        }
    })

}
