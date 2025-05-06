import { parsedEnv } from "@/validation/custom/env";
import { transporter } from "./emailTransporter";

export async function sendReminderEmail({
  to,
  username,
  carName,
  serviceName,
  dueDate,
}:{
  to: string;
  username: string;
  carName: string;
  serviceName: string;
  dueDate: Date;
}) {
  const formattedDate = dueDate.toLocaleDateString();
  await transporter.sendMail({
    from: `"Carvanna <${parsedEnv.EMAIL_SERVER_USER}>"`,
    to,
    subject: `Upcoming ${serviceName} due for ${carName}`,
    html: `
    <h2>Reminder: ${serviceName} Due</h2>
    <p>Hi! Just a quick reminder that your <strong>${serviceName}</strong> for your car <strong>${carName}</strong> is due on <strong>${formattedDate}</strong>.</p>
    <p>Make sure to schedule your service soon!</p>
    `,
  });
}
