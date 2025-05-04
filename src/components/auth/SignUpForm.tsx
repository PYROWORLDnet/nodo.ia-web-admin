"use client";
import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import EyeCloseIcon from "@/icons/ui/EyeCloseIcon";
import EyeIcon from "@/icons/ui/EyeIcon";
import { ChevronLeftIcon } from "@/icons/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignUpForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const getPasswordStrength = (password: string) => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(password);

  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full overflow-y-auto no-scrollbar bg-white dark:bg-gray-900">
      <div className="w-full max-w-3xl sm:pt-10 mx-auto mb-5 md:px-4 px-0">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon />
          Back to dashboard
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex flex-col items-center mb-10">
            <div className="mb-8 md:hidden block">
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
            <h1 className="mb-3 text-3xl font-bold text-[#000000] dark:text-white/90">
              Register as a business
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-center text-base">
              Create your account to get started
            </p>
          </div>
          <div>
            <form className="space-y-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Business Name</Label>
                    <Input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Enter your business name"
                      className="outline-none focus:ring-4 focus:ring-brand-400/30 focus:border-brand-400 transition-all duration-200 w-full"
                    />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      className="outline-none focus:ring-4 focus:ring-brand-400/30 focus:border-brand-400 transition-all duration-200 w-full"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Business address</Label>
                    <Input
                      placeholder="Enter your business address"
                      type="text"
                      className="outline-none focus:ring-4 focus:ring-brand-400/30 focus:border-brand-400 transition-all duration-200 w-full"
                    />
                  </div>
                  <div>
                    <Label>Cedula</Label>
                    <Input
                      placeholder="X-XXXXXXX-X"
                      type="text"
                      className="outline-none focus:ring-4 focus:ring-brand-400/30 focus:border-brand-400 transition-all duration-200 w-full"
                    />
                  </div>
                </div>
                <div>
                  <Label>Password</Label>
                  <div className="relative">
                    <Input
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                  <div className="mt-2">
                    <div className="flex gap-1 h-1">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-full ${i < passwordStrength
                            ? "bg-brand-400"
                            : "border border-var(--color-gray-800) dark:bg-gray-700"
                            }`}
                        />
                      ))}
                    </div>
                    <p className="mt-1 text-xs dark:text-white text-black">
                      {passwordStrength === 0 && "Enter a password"}
                      {passwordStrength === 1 && "Weak password"}
                      {passwordStrength === 2 && "Fair password"}
                      {passwordStrength === 3 && "Good password"}
                      {passwordStrength === 4 && "Strong password"}
                    </p>
                  </div>
                </div>
                <div>
                  <Label>Confirm Password</Label>
                  <div className="relative">
                    <Input
                      placeholder="Confirm your password"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="outline-none pr-10 focus:ring-4 focus:ring-brand-400/30 focus:border-brand-400 transition-all duration-200 w-full"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? <EyeCloseIcon /> : <EyeIcon />}
                    </button>
                  </div>
                  {confirmPassword && (
                    <p className={`mt-1 text-xs ${password === confirmPassword ? "text-brand-400" : "text-red-500"}`}>
                      {password === confirmPassword ? "Passwords match" : "Passwords do not match"}
                    </p>
                  )}
                </div>


                <div className="flex items-start gap-3">
                  <Checkbox
                    className="w-5 h-5 mt-1"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    By creating an account means you agree to the{" "}
                    <Link href="/terms" className="text-brand-500 hover:text-brand-600 dark:text-brand-400 font-medium">
                      Terms and Conditions
                    </Link>
                    , and our{" "}
                    <Link href="/privacy" className="text-brand-500 hover:text-brand-600 dark:text-brand-400 font-medium">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full py-3.5 text-base font-semibold rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 shadow-lg hover:from-brand-600 hover:to-brand-700 hover:shadow-xl transition-all duration-200 focus:outline-none outline-none focus:ring-offset-2 active:scale-95 text-black disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!isChecked}
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400 font-medium"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
