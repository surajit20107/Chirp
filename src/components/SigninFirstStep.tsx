"use client";
import { FaEarlybirds, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { signinStore } from "@/stores/authStore";

export default function SignIn() {
  const { setStep, email, setEmail } = signinStore();
  return (
    <div>
      <div className="m-4">
        <Link href="/">
          <IoMdClose className="text-lg" />
        </Link>
      </div>
      <div>
        <FaEarlybirds className="text-5xl mx-auto font-bold" />
      </div>
      <div className="my-4">
        <h1 className="font-bold text-3xl px-8">Sign in to Chirp</h1>
      </div>
      {/* button container */}
      <div className="flex flex-col my-6 items-center gap-2">
        <button className="p-1 w-5/6 border border-zinc-300 rounded-full flex justify-center items-center gap-2">
          <FcGoogle className="text-lg" />
          Sign in with Google
        </button>
        <button className="p-1 w-5/6 border border-zinc-300 rounded-full flex justify-center items-center gap-2">
          <FaApple className="text-xl" />
          Sign in with Apple
        </button>
      </div>
      <div className="relative flex items-center mt-4 mb-2">
          <hr className="flex-grow border-t border-gray-300" />
        <span className="absolute left-1/2 transform -translate-x-1/2 bg-white px-2 text-gray-500 text-sm">
          OR
        </span>
      </div>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Email or username"
          className="text-lg p-2 border border-zinc-300 rounded-md focus:outline-blue-400"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-6 justify-center items-center my-8">
        <button
          className="bg-black text-white w-3/4 rounded-full py-1 font-semibold"
          onClick={() => setStep(2)}
        >
          Next
        </button>
        <button className="w-3/4 rounded-full py-1 border border-zinc-400 font-semibold">
          Forgot Password?
        </button>
      </div>
      <div className="m-8">
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
