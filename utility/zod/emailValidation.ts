import { ExtendedUserSchema } from "@/validation/customValidations";
import { z } from "zod";

export const emailSchema = ExtendedUserSchema.shape.email
export type emailSchemaType = z.infer<typeof emailSchema>