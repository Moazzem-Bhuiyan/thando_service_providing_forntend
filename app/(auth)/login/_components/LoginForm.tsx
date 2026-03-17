/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import FormWrapper from "@/components/form-components/FormWrapper";
import UInput from "@/components/form-components/UInput";
import { Button } from "@/components/ui/button";

const LoginForm = ({ nextAuthUserData }: any) => {
  const [showPassword, setShowPassword] = useState(false);

  const onLoginSubmit = async (data: any) => {
    try {
      console.log("Login Data:", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <section className="mb-8 space-y-2">
        <h4 className="text-3xl font-semibold">Login</h4>
        <p className="text-dark-gray">
          Enter your email and password to login
        </p>
      </section>

      <FormWrapper
        onSubmit={onLoginSubmit}
        // resolver={zodResolver(authValidationSchema.loginSchema)}
      >
        <div className="space-y-3">
          <UInput
            name="email"
            type="email"
            placeholder="Email"
            className="px-3 py-5"
          />

          <UInput
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="px-3 py-5"
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </div>

        <Link
          href="/forgot-password"
          className="mb-5 ml-auto mt-2 block w-max text-sm text-gray-500 hover:text-black"
        >
          Forgot Password?
        </Link>

        <Button type="submit" >
          Log In
        </Button>

        <p className="mt-3 text-center text-sm text-[#666]">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="ml-1 text-[#1A1A1A] underline">
            Create One
          </Link>
        </p>
      </FormWrapper>
    </div>
  );
};

export default LoginForm;