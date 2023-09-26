import { EventCallbacks } from "next-auth";

export const events: Partial<EventCallbacks> = {
  signIn: (message) => {
    console.log("User signed in successfully", message);
  },
  signOut: (message) => {
    console.log("User signed out successfully", message);
  },
  session: ({ session }) => {
    console.log("Session info requested", session);
  },
};
