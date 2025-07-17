"use client";
import Link from "next/link";
import { FaEarlybirds, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Home() {
  return (
    <div>
      <div className="p-8">
        <FaEarlybirds className="text-4xl font-bold" />
      </div>
      <div>
        <h1 className="font-bold text-3xl px-8">Happening</h1>
      </div>
      <div>
        <h1 className="font-bold text-3xl px-8">now</h1>
      </div>
      <h2 className="font-bold text-2xl mt-4 px-8 py-4">Join today</h2>
      {/* button container */}
      <div className="flex flex-col items-center gap-2">
        <button className="p-1 w-5/6 border border-zinc-300 rounded-full flex justify-center items-center gap-2">
          <FcGoogle className="text-lg" />
          Sign up with Google
        </button>
        <button className="p-1 w-5/6 border border-zinc-300 rounded-full flex justify-center items-center gap-2">
          <FaApple className="text-xl" />
          Sign up with Apple
        </button>
      </div>
      <div className="relative flex items-center mt-4 mb-2">
          <hr className="flex-grow border-t border-gray-300" />
        <span className="absolute left-1/2 transform -translate-x-1/2 bg-white px-2 text-gray-500 text-sm">
          OR
        </span>
      </div>
      <div className="flex items-center justify-center">
        <Link className="w-2/4" href="/signup">
          <button className="p-1 w-full px-6 bg-blue-400 text-white border border-zinc-300 rounded-full">
            Create Account
          </button>
        </Link>
      </div>
      <p className="text-xs px-8 py-4">
        By signing up, you agree to the{" "}
        <span className="text-blue-400">Terms of Service </span> and{" "}
        <span className="text-blue-400">Privacy Policy</span>, including{" "}
        <span className="text-blue-400">Cookie Use</span>.
      </p>
      <h1 className="font-bold text-lg mt-6 py-2 px-8">
        Already have an account?
      </h1>
      <div className="flex justify-center">
        <Link className="w-2/4" href="/signin">
          <button className="p-1 w-full px-8 border border-zinc-300 rounded-full flex justify-center items-center gap-2 text-md font-semibold text-blue-400">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}
