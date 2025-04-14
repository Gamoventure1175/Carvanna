"use server";
import { Account } from "next-auth";
import { ExtendedUserType } from "@/validation/custom/schemas";
import prisma from "@/lib/prisma";

export default async function linkOAuth(
  account: Account,
  user: ExtendedUserType,
) {
  try {
    const newAccount = await prisma.account.create({
      data: {
        userId: user.id,
        provider: account.provider,
        providerAccountId: account.providerAccountId,
        type: account.type,
        refresh_token: account.refresh_token,
        access_token: account.access_token,
        expires_at: account.expires_at,
        token_type: account.token_type,
        scope: account.scope,
        id_token: account.id_token,
      },
    });

    const userAccountLink = await prisma.userAccount.create({
      data: {
        userId: user.id,
        accountId: newAccount.id,
      },
    });

    return {
      "New account created": newAccount,
      "User and Account linked": userAccountLink,
    };
  } catch (error) {
    console.log(error);
  }
}
