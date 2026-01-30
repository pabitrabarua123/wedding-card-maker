"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";

export default function CheckEmailPage() {
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

      {/* Check Email Section */}
      <section className="pb-0 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex h-screen items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full mx-4 text-center">
              <Mail className="mx-auto h-16 w-16 text-[#8B4513] mb-6" />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Check your email</h1>
              <p className="text-gray-600 mb-6">
                We've sent a sign-in link to your email address. Please check your inbox and click the link to sign in.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                The link will expire in 10 minutes.
              </p>
              <Link href="/templates">
                <Button variant="outline" className="w-full">
                  See Templates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
