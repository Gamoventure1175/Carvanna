import { z } from "zod";
import { ExtendedUserSchema } from "./schemas";

export const OauthOnlyAccount = z.object({
  name: ExtendedUserSchema.shape.name,
  driversLicense: ExtendedUserSchema.shape.driversLicense,
  phone: ExtendedUserSchema.shape.phone,
  location: ExtendedUserSchema.shape.location,
  password: ExtendedUserSchema.shape.password,
});

export type OauthOnlyAccountType = z.infer<typeof OauthOnlyAccount>;

export const NonOauthAccount = z.object({
  name: ExtendedUserSchema.shape.name,
  driversLicense: ExtendedUserSchema.shape.driversLicense,
  phone: ExtendedUserSchema.shape.phone,
  location: ExtendedUserSchema.shape.location,
});

export type NonOauthAccountType = z.infer<typeof NonOauthAccount>;
