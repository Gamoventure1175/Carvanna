import { parsedEnv } from "@/validation/custom/env";
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: parsedEnv.EMAIL_SERVER_HOST,
  port: parsedEnv.EMAIL_SERVER_PORT,
  secure: true,
  auth: {
    user: parsedEnv.EMAIL_SERVER_USER,
    pass: parsedEnv.EMAIL_SERVER_PASSWORD,
  },
});
