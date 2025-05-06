import { z } from "zod";
import { ServiceTypeSchema } from "../generated";

export const serviceTypeLabel = z.enum(["OIL_CHANGE", "TIRE_ROTATION"]);
export const serviceTypeName = z.enum(["Oil Change", "Tire Rotation"]);

export const serviceTypeSchema = ServiceTypeSchema.extend({
  label: serviceTypeLabel,
  name: serviceTypeName,
});

export type serviceTypeSchemaType = z.infer<typeof serviceTypeSchema>;
