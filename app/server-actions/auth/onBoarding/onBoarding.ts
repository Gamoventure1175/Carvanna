"use server";

import { auth } from "@/lib/auth/authSetup";
import prisma from "@/lib/prisma/prisma";
import hashPassword from "@/utility/auth/hashPassword";
import validateWithSchema from "@/utility/zod/validateWithSchema";
import {
  NonOauthAccount,
  NonOauthAccountType,
  OauthOnlyAccount,
  OauthOnlyAccountType,
} from "@/validation/custom/onBoardData";

export default async function onBoard(
  data: OauthOnlyAccountType | NonOauthAccountType,
) {
  const session = await auth();

  if (!session?.user?.id) {
    throw Error("No user signed in");
  }

  const isOauth = session?.user?.oauthOnly;

  const updateData: Record<string, any> = {
    onBoarded: true,
  };

  if (isOauth) {
    const validatedData = validateWithSchema(OauthOnlyAccount, data);
    updateData.driversLicense = validatedData.driversLicense;
    updateData.location = validatedData.location;
    updateData.name = validatedData.name;
    updateData.password = await hashPassword(validatedData.password);
    updateData.oauthOnly = false;
    updateData.phone = validatedData.phone;
  } else {
    const validatedData = validateWithSchema(NonOauthAccount, data);
    updateData.driversLicense = validatedData.driversLicense;
    updateData.location = validatedData.location;
    updateData.name = validatedData.name;
    updateData.phone = validatedData.phone;
  }

  const update = await prisma.user.update({
    where: { id: session.user.id },
    data: updateData,
  });

  if (!update) {
    throw Error("Could not update the user profile");
  }

  return update;
}
