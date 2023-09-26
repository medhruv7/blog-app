"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const SignoutButton = () => {
  const session = useSession();
  if (!session) {
    return redirect("/api/auth/signin");
  }
  return (
    <div>
      <button onClick={() => signOut()}>Signout</button>
    </div>
  );
};
