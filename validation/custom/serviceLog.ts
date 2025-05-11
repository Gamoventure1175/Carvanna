import { z } from "zod";

export const serviceLogFormSchema = z.object({
  carId: z
    .string({
      message: "Car ID is required",
    })
    .nonempty({ message: "Car Id cannot be empty" })
    .cuid({}),
  serviceTypeId: z.number({
    message: "Service type is required",
  }),
  serviceDate: z.coerce.date().refine((date) => date <= new Date(), {
    message: "Service date cannot be in the future",
  }),
  mileageAtTime: z.coerce.number().int().nonnegative(),
  notes: z
    .string()
    .trim()
    .max(1000, { message: "Notes can't exceed 1000 characters" })
    .optional(),
});

export type serviceLogFormSchemaType = z.infer<typeof serviceLogFormSchema>;
