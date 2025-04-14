"use server";

import prisma from "@/lib/prisma";
import getUsernameFromEmail from "@/utility/general-purpose/getUsernameFromEmail";
import { Account, Profile } from "next-auth";
import linkOAuth from "./linkOAuth";
import getNameForOauth from "@/utility/general-purpose/getNameForOauth";

export default async function createOAuthAccount(
  account: Account,
  profile: Profile,
) {
  try {
    if (!profile.email)
      throw new Error(
        "Google Provider did not return an email. Email is required to create a new user for OAuth",
      );

    const createdUser = await prisma.user.create({
      data: {
        //ESSENTIAL INFO

        //id = default value generated
        email: profile.email,
        emailVerified: profile.email_verified ? new Date() : undefined,
        username: getUsernameFromEmail(profile.email),
        //password is not needed
        //role = default value is 'USER'
        //createdAt = default value is current time stamp
        //updatedAt = default value is when last updated
        //isVerified = default value is 'false'
        oauthOnly: true,

        //PERSONAL INFO
        name: getNameForOauth(profile),
        bio: null,
        driversLicense: null,
        profileImageUrl: profile.picture,
        //gender = default value is 'MALE'
        dateOfBirth: null,
        phone: null,
        location: null,
      },
    });

    const createAccountLink = await linkOAuth(account, createdUser);

    return { "New user created": createdUser, createAccountLink };
  } catch (error) {
    console.error({ "Error creating a new user for OAuth": error });
  }
}
