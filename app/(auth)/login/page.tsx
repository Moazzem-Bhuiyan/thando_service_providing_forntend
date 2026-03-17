import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginForm from "./_components/LoginForm";

export const metadata = {
  title: "Login",
  description: "Login page",
};

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  return <LoginForm nextAuthUserData={session?.user} />;
}
;