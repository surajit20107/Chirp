"use client";
import { useState } from "react";
import { FaEarlybirds, FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { signinStore } from "@/stores/authStore";

export default function password() {
  const { email, password, setPassword } = signinStore();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="m-6">
        <Link href="/">
          <IoMdClose className="text-xl" />
        </Link>
      </div>
      <div>
        <FaEarlybirds className="text-5xl mx-auto" />
      </div>
      <div className="py-6 flex flex-col items-center gap-6">
        <h1 className="text-center text-2xl font-semibold">
          Enter your password
        </h1>
        <form className="flex flex-col gap-1">
          <div className="mt-4">
            <input
              type="email"
              name="email"
              placeholder="Email or username"
              className="text-lg text-gray-500 p-2 border border-zinc-300 rounded-md focus:outline-blue-400 mx-6 bg-gray-200"
              value={email}
              readOnly
            />
          </div>
          <div className="relative mt-6">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="text-lg p-2 border border-zinc-300 rounded-md focus:outline-blue-400 mx-6"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              {showPassword ? (
                <FaEye
                  className="absolute right-9 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEyeSlash
                  className="absolute right-9 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
          <Link href="/forgot-password" className="text-blue-400 mx-6 text-sm">
            <p>Forgot password?</p>
          </Link>
          <div className="mt-12 flex items-center justify-center">
            <button
              type="submit"
              className="bg-black text-white w-3/4 rounded-full py-1 font-semibold">
              Log in
            </button>
          </div>
        </form>
      </div>
      <div className="mx-12">
        <p className="text-zinc-500 text-sm">
          Don't have an account?{" "}
          <Link className="text-blue-400" href="/signup">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
