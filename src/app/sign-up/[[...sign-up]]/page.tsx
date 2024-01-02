import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export default function SignUpPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignUp appearance={{ variables: { colorPrimary: "#58c3fc" } }} />
    </div>
  );
}
