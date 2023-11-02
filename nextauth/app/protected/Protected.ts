import { getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

// export const loginRequiredInserver = async () => {
//   const session = await getServerSession(Options);

//   if (!session) return redirect("/");
// };

export const Options = {
  //   secreat: process.env.NEXT_AUTH_SECREAT,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "enter your name",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "enter your password",
        },
      },
      async authorize(credentials) {
        const user = { id: "1", username: "test", password: "test" };

        if (
          user.username === credentials?.username &&
          user.password === credentials.password
        ) {
          return user;
        }
        return null;
      },
    }),
  ],
};

export default async function loginRequiredInserver() {
  const session = await getServerSession(Options);
  console.log(session);
  if (!session) return redirect("/");
}
