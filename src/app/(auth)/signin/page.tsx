"use client";
import EmailStep from "@/components/SigninFirstStep";
import PasswordStep from "@/components/SigninSecondStep";
import { signinStore } from "@/stores/authStore";

export default function SignIn() {
  const { step } = signinStore()
  console.log(step)
  return (
    <div>
      {step === 1 &&  <EmailStep />}
      {step === 2 && <PasswordStep />}
    </div>
  );
}
