import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Sign in",
      id: "credentials",
      credentials: {
        user_name: { type: "text", placeholder: "test@test.com" },
        password: { type: "password", placeholder: "Pa$$w0rd" },
      },
      async authorize(credentials) {
        console.log("credentials", credentials);

        if (credentials?.user_name || credentials?.password) {
          const user: any = await prisma.user.findUnique({
            where: {
              user_name: credentials.user_name,
            },
          });
          console.log("User", user);
          return user;
        }
      },
    }),
  ],
  callbacks: {
    session({ session, token }) {
      session.user = token?.user; // This user data come from jwt's token.user
      return session;
    },
    jwt({ token, account, user }) {
      if (user) {
        token.id = user.id;
        token.user_name = (user as any).user_name;
        token.name = (user as any).name;
        token.user = user;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
