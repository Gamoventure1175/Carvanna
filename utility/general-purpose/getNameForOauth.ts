import { Profile } from "next-auth";
import validateWithSchema from "../zod/validateWithSchema";
import { nameSchema } from "../zod/nameValidation";

export default function getNameForOauth(profile: Profile) {
  if (!profile.given_name || !profile.family_name)
    throw new Error(
      "Did not receive name from the provided Oauth Profile object",
    );

  const fullName = profile.given_name + " " + profile.family_name;

  const validatedName = validateWithSchema(nameSchema, fullName);

  return validatedName;
}
