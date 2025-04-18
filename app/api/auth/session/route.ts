import {auth} from '@/lib/auth/authSetup'

export async function GET() {
  const session = await auth();

  if (!session || !session.user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  return Response.json(session);
}
