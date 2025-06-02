"use server";

import {prisma} from "@/lib/prisma/prisma";
import { createReminderJob } from "@/lib/queues/service/serviceReminderProducer";
import { serviceLogFormSchemaType } from "@/validation/custom/serviceLog";

export default async function addServiceLogAction(
  formData: serviceLogFormSchemaType,
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
    throw new Error("Service type is missing interval days");
  }

  let serviceNotes = "";
  const today = new Date();
  const originalDueDate = new Date(serviceDate);
  originalDueDate.setDate(originalDueDate.getDate() + serviceType.intervalDays);

  let nextDueDate = originalDueDate;

  if (originalDueDate < today) {
    nextDueDate = new Date(
      today.setDate(today.getDate() + serviceType.intervalDays),
    );
    serviceNotes =
      "This reminder is based on the last recorded service but has been adjusted for today's date to keep you on track.";
  }

  console.log("next due date", nextDueDate);

  await createReminderJob({
    carId: carId,
    serviceLogId: serviceLog.id,
    serviceTypeId: serviceType.id,
    userId: serviceLog.car.ownerId,
    dueDate: nextDueDate,
    notes: serviceNotes,
  });

  if (process.env.NODE_ENV !== "production")
    console.log("Created a service reminder job");

  const reminderJob = await prisma.reminderJob.create({
    data: {
      carId: carId,
      userId: serviceLog.car.ownerId,
      sent: false,
      type: "SERVICE",
      referenceId: serviceLog.id.toString(),
      scheduledAt: nextDueDate,
      notes: serviceNotes.length === 0 ? null : serviceNotes,
    },
  });

  return {
    success: true,
    message:
      serviceNotes.length > 0
        ? "Service log added successfully. Looks like the last service was a while ago — we’ve scheduled the next reminder starting from today to keep your car maintenance on track."
        : "Service log added successfully.",
    nextDueDate: nextDueDate.toISOString(),
    adjusted: serviceNotes.length > 0,
    serviceType: serviceType.name,
    carName: `${serviceLog.car.brand} ${serviceLog.car.model}`,
  };
}
