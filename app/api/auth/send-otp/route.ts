import { addOtpJob } from "@/lib/queues/emailProducer";
import { generateAndStoreOtp } from "@/lib/redis/otp";
import validateWithSchema from "@/utility/zod/validateWithSchema";
import { signUpSchema } from "@/validation/custom/signUp";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, username } = await req.json();

  const validatedEmail = validateWithSchema(signUpSchema.shape.email, email);
  const validatedUsername = validateWithSchema(
    signUpSchema.shape.username,
    username,
  );

  const otp = await generateAndStoreOtp(validatedEmail);

  await addOtpJob(validatedEmail, validatedUsername, otp);

  return NextResponse.json({ success: true, message: "OTP sent successfully" });
}
