import { z } from "zod";
import { ZodError, fromZodError } from "zod-validation-error";

// This function is used to validate the data provided to it against
// the generated zod schemas from prisma or any other zod validation logic
// It returns the validated data (if available) or throws an error

export default function validateWithSchema<T extends z.ZodTypeAny>(
  schema: T,
  data: unknown,
): z.infer<T> {
  const validation = schema.safeParse(data);
  if (!validation.success) {
    console.log(fromZodError(validation.error));
    throw new Error("Validation failed");
  }

  return validation.data;
}
