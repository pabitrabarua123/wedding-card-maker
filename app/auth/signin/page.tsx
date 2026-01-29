"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await signIn("email", {
      email,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#D4A574]">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20 fixed w-full z-10 top-0 left-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Contact Section */}
      <section className="pb-0 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex h-screen items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full mx-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <h1 className="text-xl font-bold">Sign in to your account</h1>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border p-2 w-full rounded-md"
                />
                <button className="bg-black text-white px-4 py-2 cursor-pointer w-full bg-gradient-to-r from-[#8B4513] to-[#D4A574] hover:from-[#7A3A0F] hover:to-[#C4956A] rounded-md" type="submit">
                  Log in
                </button>
              </form>
              <p className="text-[13px] font-medium mt-4 text-gray-800">Don't have an account? <Link href={`/auth/signup`} className="text-[#795548]">Sign up</Link></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
