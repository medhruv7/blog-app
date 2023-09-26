import { getServerSession } from "next-auth";
import { SignoutButton } from "./components/SignoutButton";
import { WelcomePage } from "./components/WelcomePage";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function Home() {
}
