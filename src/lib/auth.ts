import { type NextAuthOptions, type DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      rolle: "unternehmen" | "operator";
      firmenname: string;
    } & DefaultSession["user"];
  }
  interface User {
    rolle: "unternehmen" | "operator";
    firmenname: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    rolle: "unternehmen" | "operator";
    firmenname: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "E-Mail", type: "email" },
        password: { label: "Passwort", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email.toLowerCase().trim() },
        });

        if (!user) return null;

        const passwortStimmt = await bcrypt.compare(credentials.password, user.passwortHash);
        if (!passwortStimmt) return null;

        // Konto muss bestätigt sein
        if (!user.emailVerifiziert) {
          throw new Error("email_nicht_bestaetigt");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.ansprechpartner,
          firmenname: user.firmenname,
          rolle: user.rolle,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.rolle = user.rolle;
        token.firmenname = user.firmenname;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.rolle = token.rolle;
        session.user.firmenname = token.firmenname;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 Tage
  },
  secret: process.env.NEXTAUTH_SECRET,
};
