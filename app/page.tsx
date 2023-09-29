import { redirect } from "next/navigation";

const Home = async () => {
  redirect("/posts");
};

export default Home;
