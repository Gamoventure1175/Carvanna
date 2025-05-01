import { z } from "zod";
import { ExtendedUserSchema } from "./schemas";

export const SessionUserSchema = z.object({
  id: ExtendedUserSchema.shape.id,
  username: ExtendedUserSchema.shape.username,
  role: ExtendedUserSchema.shape.role,
  isVerified: ExtendedUserSchema.shape.isVerified,
  onBoarded: ExtendedUserSchema.shape.onBoarded,
  profileImageUrl: ExtendedUserSchema.shape.profileImageUrl
    .nullable()
    .optional(),
  accessToken: z.string().nullable().optional(),
  oauthOnly: ExtendedUserSchema.shape.oauthOnly,
  emailVerified: ExtendedUserSchema.shape.emailVerified,
});

export type SessionUserType = z.infer<typeof SessionUserSchema>;
