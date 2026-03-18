"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SignInForm() {
  const [email, setEmail] = useState<string>("");
  const [submit_form, setSubmitForm] = useState(false);

  const searchParams = useSearchParams();
  const referrer_template = searchParams.get("referrer_template") || undefined;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitForm(true);

    let callbackUrl = referrer_template
      ? `/editor?template=${referrer_template}`
      : "/templates";

    await signIn("email", {
      email,
      callbackUrl,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-xl font-bold">Sign in to your account</h1>

      <input
        type="email"
        required
        placeholder="youremail@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full rounded-md"
      />

      <button type="submit">
        {submit_form ? "Sending verification email..." : "Log in"}
      </button>
    </form>
  );
}