"use client";
import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
import { ChevronLeftIcon } from "@/icons/navigation";
import EyeCloseIcon from "@/icons/ui/EyeCloseIcon";
import EyeIcon from "@/icons/ui/EyeIcon";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full overflow-y-auto no-scrollbar">
      <div className="w-full max-w-md sm:pt-10 mx-auto mb-5">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon />
          Back to dashboard
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div className="">
          <div className="mb-8 md:hidden flex justify-center items-center">
            <Image
              className="dark:hidden"
              src="/logolight.svg"
              alt="Logo"
              width={150}
              height={40}
            />
            <Image
              className="hidden dark:block"
              src="/logodark.svg"
              alt="Logo"
              width={150}
              height={40}
            />
          </div>
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Welcome Back!</h1>
            <p className="text-gray-600 dark:text-gray-400">Please sign in to your account</p>
          </div>
          <div className="md:p-8 p-2">
            <form>
              <div className="space-y-6">
                <div>
                  <Label>
                    Email <span className="text-error-500">*</span>{" "}
                  </Label>
                  <Input
                    placeholder="info@gmail.com"
                    type="email"
                    className="outline-none focus:ring-4 focus:ring-brand-400/30 focus:border-brand-400 transition-all duration-200 w-full"
                  />
                </div>
                <div>
                  <Label>
                    Password <span className="text-error-500">*</span>{" "}
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="outline-none pr-10 focus:ring-4 focus:ring-brand-400/30 focus:border-brand-400 transition-all duration-200 w-full"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeCloseIcon /> : <EyeIcon />}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                    <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                      Keep me logged in
                    </span>
                  </div>
                  <Link
                    href="/reset-password"
                    className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div>
                  <Button
                    className="w-full py-3.5 text-base font-semibold rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 shadow-lg hover:from-brand-600 hover:to-brand-700 hover:shadow-xl transition-all duration-200 focus:outline-none outline-none focus:ring-offset-2 active:scale-95 text-black"
                    size="sm"
                  >
                    Sign in
                  </Button>
                </div>
              </div>
            </form>

            <div className="mt-8">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                Don&apos;t have an account? {""}
                <Link
                  href="/signup"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
