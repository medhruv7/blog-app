import { redirect } from "next/navigation";

export async function Home() {
  redirect("/posts");
}
