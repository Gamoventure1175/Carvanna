import React from "react";
import { useSession } from "next-auth/react";

function User() {
  const { data: session } = useSession();

  let name = session?.user.username ? session?.user.username : "unknown";

  return <div>{name}</div>;
}

export default User;
