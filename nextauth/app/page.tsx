import { getServerSession } from "next-auth";
import Image from "next/image";
import { Options } from "./protected/Protected";
import { redirect } from "next/navigation";
import Login from "./auth/login/Login";

export default async function Home() {
  const session = await getServerSession(Options);

  if (session) return redirect("/dashboard");
  return (
    <h1>
      Hello n
      <Login />
    </h1>
  );
}
