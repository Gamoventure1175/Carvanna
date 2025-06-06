import { parsedEnv } from "@/validation/custom/env";
import { transporter } from "./emailTransporter";

export async function sendOtpEmail(to: string, username: string, otp: string, from: string) {
  const html = `
    <h2>Hello ${username},</h2>
    <p>Your Carvanna OTP is: <strong>${otp}</strong></p>
    <p>It is valid for 10 minutes.</p>
  `;

  await transporter.sendMail({
    from: `"Carvanna" <${from}>`,
    to,
    subject: "Your Carvanna OTP Code",
    html,
  });
}
