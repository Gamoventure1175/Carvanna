import { ExtendedUserSchema } from "./schemas";
import { z } from "zod";

export const nameSchema = ExtendedUserSchema.shape.name;
export type nameSchemaType = z.infer<typeof nameSchema>;
