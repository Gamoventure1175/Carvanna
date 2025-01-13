import getServerSession from "next-auth";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (session?.user) {
    await revokeRefreshToken(session.user.accessToken);
  }

  res.status(200).json({ message: "Logged out successfully" });
}
