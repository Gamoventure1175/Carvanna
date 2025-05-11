import { parsedEnv } from "@/validation/custom/env";
import { transporter } from "./emailTransporter";

const htmlForEmail = ({
  serviceName,
  carName,
  formattedDate,
  notes,
}: {
  serviceName: string;
  carName: string;
  formattedDate: string;
  notes: string;
}) => {
  if (notes.length !== 0) {
    return `
    <h2>Reminder: ${serviceName} Due</h2>
    <p>Hi! Just a quick reminder that your <strong>${serviceName}</strong> for your car <strong>${carName}</strong> is due on <strong>${formattedDate}</strong>.</p>
    <p>Make sure to schedule your service soon!</p>
    <i><em>Notes: ${notes}</em></i>
    `;
  }
  return `
    <h2>Reminder: ${serviceName} Due</h2>
    <p>Hi! Just a quick reminder that your <strong>${serviceName}</strong> for your car <strong>${carName}</strong> is due on <strong>${formattedDate}</strong>.</p>
    <p>Make sure to schedule your service soon!</p>
    `;
};

export async function sendReminderEmail({
  to,
  username,
  carName,
  serviceName,
  dueDate,
  notes,
}: {
  to: string;
  username: string;
  carName: string;
  serviceName: string;
  dueDate: Date;
  notes: string;
}) {
  const formattedDate = dueDate.toLocaleDateString();
  await transporter.sendMail({
    from: `"Carvanna <${parsedEnv.EMAIL_SERVER_USER}>"`,
    to,
    subject: `Upcoming ${serviceName} due for ${carName}`,
    html: htmlForEmail({
      serviceName: serviceName,
      carName: carName,
      formattedDate: formattedDate,
      notes: notes,
    }),
  });
}
