import NextAuth, { type NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      from: process.env.EMAIL_FROM,

      async sendVerificationRequest({ identifier, url }) {
          const transporter = nodemailer.createTransport({
          host: process.env.BREVO_SMTP_HOST,
          port: 587,
          secure: false,
          auth: {
            user: process.env.BREVO_SMTP_USER,
            pass: process.env.BREVO_SMTP_PASS,
          },
        });
        
        await transporter.sendMail({
          to: identifier,
          from: process.env.EMAIL_FROM,
          subject: "Sign in to Wedify",
          html: `
            <div style="font-family: Arial, sans-serif;">
              <h2>Magic login link</h2>
              <p>Click the button below to sign in:</p>
              <p>
                <a href="${url}"
                   style="background:#000;color:#fff;padding:10px 16px;
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

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
