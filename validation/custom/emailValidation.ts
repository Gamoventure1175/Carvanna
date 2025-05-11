import { ExtendedUserSchema } from "./schemas";
import { z } from "zod";

export const emailSchema = ExtendedUserSchema.shape.email;
export type emailSchemaType = z.infer<typeof emailSchema>;
