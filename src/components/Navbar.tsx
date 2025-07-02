"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();


  return (
    <nav className="bg-zinc-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-semibold">
          Mind Mesh
        </Link>

        {session ? (
          <div className="flex items-center space-x-4">
            {" "}
            <div className="">
              <Link href="/dashboard" className="p-4">Dashboard</Link>
              <Link href="/" className="p-4">Share</Link>
              <button
                onClick={() => {
                  signOut({ callbackUrl: "/" }); 
                }}
                className=" bg-[#800fbc] px-4 py-2 rounded m-3 hover:cursor-pointer "
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            {" "}
            <div className="">
              <button
                onClick={() => {
                  router.push("/auth/signup"); 
                }}
                className=" bg-blue-400 text-black px-4 py-2 rounded m-3 hover:cursor-pointer "
              >
                Sign up
              </button>
              <button
                onClick={() => {
                  router.push("/auth/signin"); 
                }}
                className=" bg-[#800fbc] px-4 py-2 rounded m-3 hover:cursor-pointer "
              >
                Log In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
