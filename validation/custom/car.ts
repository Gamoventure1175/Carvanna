import { z } from "zod";
import { ExtendedCarSchema } from "./schemas";

export const CarForm = z.object({
  brand: ExtendedCarSchema.shape.brand,
  model: ExtendedCarSchema.shape.model,
  mileage: ExtendedCarSchema.shape.mileage,
  color: ExtendedCarSchema.shape.color,
  licensePlate: ExtendedCarSchema.shape.licensePlate,
  year: ExtendedCarSchema.shape.year,
});

export type CarFormType = z.infer<typeof CarForm>;
