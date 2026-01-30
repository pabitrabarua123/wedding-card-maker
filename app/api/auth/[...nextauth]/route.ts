// app/api/auth/[...nextauth]/route.ts
export const dynamic = "force-dynamic";

import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { sendEmailCustomer } from "@/lib/emailService";

// Factory function to create auth options
const createAuthOptions = (): NextAuthOptions => ({
  adapter: PrismaAdapter(prisma), // runtime only
  providers: [
    EmailProvider({
      from: process.env.EMAIL_FROM!,
      async sendVerificationRequest({ identifier, url }) {
        await sendEmailCustomer({ identifier, url });
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/check-email", // optional: custom verify page
  },
  debug: process.env.NODE_ENV === "development",
});

const handler = NextAuth(createAuthOptions());

export { handler as GET, handler as POST };
