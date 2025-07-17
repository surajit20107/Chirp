"use client";
import { FaEarlybirds } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

export default function Signup() {
  return (
    <div>
      <Link href="/">
      <IoMdClose className="text-xl m-4" />
      </Link>
      <div className="p-4">
        <div className="flex items-center">
        
        <FaEarlybirds className="text-5xl mx-auto font-bold" />
        </div>
      </div>
      <div className="py-2">
        <h1 className="text-xl font-semibold px-8">Create your account</h1>
      </div>
      <div>
        <form className="flex flex-col gap-6">
          <div className="px-8">
            <input
              type="text"
              placeholder="Name"
              className="text-lg p-2 border border-zinc-300 rounded-md focus:outline-blue-400"
              required
            />
          </div>
          <div className="px-8">
            <input
              type="email"
              placeholder="Email"
              className="text-lg p-2 border border-zinc-300 rounded-md focus:outline-blue-400"
              required
            />
          </div>
          <div className="px-8">
            <div>
              <h1 className="font-semibold">Date of Birth</h1>
              <p className="text-xs py-2">
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </p>
            </div>
            <div className="relative">
              <input
                type="date"
                id="dob"
                name="dob"
                placeholder="Date of Birth"
                className="mt-1 w-7/8 text-lg p-2 border border-zinc-300 rounded-md focus:outline-blue-400"
                required
              />
              <label
                htmlFor="dob"
                className="absolute left-4 top-1/4 text-gray-400">
                Date of Birth
              </label>
            </div>
          </div>
          <div className="mt-2 py-6 flex justify-center items-center">
            <button
              type="submit"
              className="w-5/8 bg-blue-400 px-12 py-2 text-md font-semibold text-white rounded-full cursor-pointer hover:bg-blue-500">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
