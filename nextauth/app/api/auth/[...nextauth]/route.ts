import NextAuth from "next-auth/next";
import { Options } from "@/app/protected/Protected";

export const handler = NextAuth(Options);

export { handler as GET, handler as POST };
