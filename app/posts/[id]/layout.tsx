import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ReactNode } from "react";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <div className="p-10">
        <Link href="/posts">
          <ArrowBackIcon /> Go Back to Posts
        </Link>
      </div>
    </div>
  );
}
