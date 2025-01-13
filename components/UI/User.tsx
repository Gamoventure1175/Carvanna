import React from 'react'
import { useSession } from "next-auth/react";

function User() {
    const {data: session} = useSession();

    let name = 'unknown';

    if (session) {
        console.log(session.user?.name)
        name = session.user?.name ?? 'signedin'
    }

  return (
    <div>{name}</div>
  )
}

export default User