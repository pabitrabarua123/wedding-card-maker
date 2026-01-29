// app/api/auth/[...nextauth]/route.ts
export const dynamic = "force-dynamic";

import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

// Factory function to create auth options
const createAuthOptions = (): NextAuthOptions => ({
  adapter: PrismaAdapter(prisma), // runtime only
  providers: [
    EmailProvider({
      from: process.env.EMAIL_FROM!,
      async sendVerificationRequest({ identifier, url }) {
        // Create Nodemailer transporter at runtime
        const transporter = nodemailer.createTransport({
          host: process.env.BREVO_SMTP_HOST!,
          port: 587,
          secure: false, // Must be false for 587
          auth: {
            user: process.env.BREVO_SMTP_USER!,
            pass: process.env.BREVO_SMTP_PASS!,
          },
          // optional: ignore TLS errors in dev
          tls: process.env.NODE_ENV === "development" ? { rejectUnauthorized: false } : undefined,
        });

        await transporter.sendMail({
          to: identifier,
          from: process.env.EMAIL_FROM!,
          subject: "Sign in to Wedify",
          html: `
            <div style="font-family: Arial, sans-serif;">
              <h2>Magic login link</h2>
              <p>Click the button below to sign in:</p>
              <p>
                <a href="${url}" style="background:#000;color:#fff;padding:10px 16px;
                  text-decoration:none;border-radius:6px;">
                  Sign in
                </a>
              </p>
              <p>This link expires in 10 minutes.</p>
            </div>
          `,
        });
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

// Handler for GET and POST requests
const handler = NextAuth(createAuthOptions());

export { handler as GET, handler as POST };
