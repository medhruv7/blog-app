"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const SignoutButton = () => {
  const { status } = useSession();

  if (status === "unauthenticated") {
    return redirect("/api/auth/signin");
  }

  return (
    <div>
      <button
        onClick={() => {
          console.log("here");
          signOut();
        }}
      >
        Signout
      </button>
    </div>
  );
};
