import { Suspense } from "react";
import SignInForm from "@/components/auth/SignInForm";

export default function SignInPage() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <SignInForm />
      </Suspense>
    </main>
  );
}