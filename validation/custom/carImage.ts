import { z } from "zod";

const base64Regex = /^[A-Za-z0-9+/=]+$/;

export const carImageApiSchema = z.object({
  file: z
    .string()
    .min(1, "File (base64 string) is required")
    .regex(base64Regex, "Invalid base64 string"),
  ownerId: z.coerce.number(),
});

export type carImageApiSchemaType = z.infer<typeof carImageApiSchema>;
