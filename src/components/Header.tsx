"use client";
import { FaEarlybirds } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-2 relative">
      <Image src="/defaultProfile.webp" alt="profile picture" width={30} height={30} className="rounded-full object-cover" />
      <FaEarlybirds className="text-3xl absolute left-1/2 transform -translate-x-1/2" />
      <div>
        <Link href="#" className="border border-zinc-300 rounded-lg px-2 py-1 text-xs">
          Upgrade
        </Link>
      </div>
    </div>
  )
}