"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Sum from "@/app/icons/sum";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignupForm({ className, ...props }) {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 2) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };
  const handleClickLogin = () => {
    router.push("/login");
  };
  return (
    <div>
      <form className={cn("flex flex-col gap-6", className)} {...props}>
        <FieldGroup>
          <div className="flex flex-col items-start gap-1 text-center relative">
            {/* --- Sum дээр дарахад буцна --- */}
            <button
              type="button"
              onClick={handleBack}
              className="flex w-[36px] h-[36px] px-4 py-2 justify-center items-center gap-2 border rounded-2xl hover:bg-gray-100 transition"
            >
              <Sum />
            </button>

            <h1 className="text-2xl font-bold mt-2">Create your account</h1>
            <p className="text-[#71717A] text-[14px] leading-[14px] font-inter not-italic font-normal">
              Sign up to explore your favorite dishes.
            </p>
          </div>

          {/* --- Алхам 1: Email --- */}
          {step === 1 && (
            <Field>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                required
              />
            </Field>
          )}

          {/* --- Алхам 2: Password --- */}
          {step === 2 && (
            <Field className="flex flex-col gap-3">
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
              <Input
                id="confirm"
                type="password"
                placeholder="Confirm your password"
                required
              />
              <p className="text-[#71717A] font-inter text-[14px] not-italic font-normal leading-[14px]">
                Show password
              </p>
            </Field>
          )}

          {/* --- Next / Submit --- */}
          <Field>
            <Button type="submit" onClick={handleNext}>
              Let's Go
            </Button>
          </Field>

          {/* --- Already have account --- */}
          <Field>
            <FieldDescription className="px-6 text-center">
              Already have an account?{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline"
                onClick={handleClickLogin}
              >
                Log in
              </a>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
