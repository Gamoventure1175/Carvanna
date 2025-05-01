import { deleteOtp, verifyOtp } from "@/lib/redis/otp";
import validateWithSchema from "@/utility/zod/validateWithSchema";
import { otpSchema, signUpSchema } from "@/validation/custom/signUp";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, otp } = await req.json();

  const validatedEmail = validateWithSchema(signUpSchema.shape.email, email);
  const validatedOtp = validateWithSchema(otpSchema.shape.otp, otp);

  const result = await verifyOtp(validatedEmail, validatedOtp);
  await deleteOtp(email);

  if (!result) {
    return NextResponse.json(
      { success: false, message: "Invalid OTP" },
      { status: 401 },
    );
  }

  return NextResponse.json({ success: true, message: "Verified" });
}
