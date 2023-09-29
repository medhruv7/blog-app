import "server-only";

import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const NavbarProfile = async () => {
  const session = await getServerSession(options);

  if (!session) {
    return null;
  }

  return (
    <div className="flex space-x-5 items-center">
      <div>{session?.user?.name}</div>
      <div>
        <Image
          src={session?.user?.image as string | StaticImport}
          width={50}
          height={50}
          alt="Profile Picture"
        />
      </div>
    </div>
  );
};
