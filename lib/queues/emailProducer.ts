import { emailQueue } from "./emailQueue";

export async function addOtpJob(to: string, username: string, otp: string) {
  await emailQueue.add(
    "send-otp-email",
    {
      to,
      username,
      otp,
    },
    { removeOnComplete: true, removeOnFail: true },
  );
}
