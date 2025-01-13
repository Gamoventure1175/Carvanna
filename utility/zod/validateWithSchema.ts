import { z } from "zod";
import { ZodError, fromZodError } from "zod-validation-error";

// This function is used to validate the data provided to it against 
// the generated zod schemas from prisma or any other zod validation logic
// It returns the validated data (if available) or throws an error

export default function validateWithSchema<T>(schema: z.ZodSchema, data: unknown) {
    const validation = schema.safeParse(data);
    if(!validation.success) {
        console.log(fromZodError(validation.error));
        throw new Error('Validation failed') as ZodError;
    }

    return validation;
}