import SignInForm from "@/components/auth/SignInForm";

export default function SignInPage({
  searchParams,
}: {
  searchParams: { referrer_template?: string };
}) {
  return <SignInForm referrer_template={searchParams.referrer_template} />;
}