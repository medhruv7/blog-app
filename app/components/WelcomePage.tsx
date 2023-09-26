import { Session, getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export const WelcomePage = async ({ session }: { session: Session }) => {
  return (
    <div>
      You are logged in as {session?.user?.name}
      <img src={session?.user?.image as string | undefined} />
    </div>
  );
};
