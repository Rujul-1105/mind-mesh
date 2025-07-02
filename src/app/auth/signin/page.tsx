"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IconBrandGoogleFilled } from "@tabler/icons-react";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <>
      <div className="space-y-4 max-w-md mx-auto mt-10 flex flex-col items-center p-5">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-md mx-auto mt-10"
        >
          <h1 className="text-2xl font-bold">Log In to your Mesh</h1>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-[#800fbc] rounded-2xl p-4 hover:cursor-pointer"
          >
            Login
          </button>
        </form>
        <p
          className="text-zinc-500"
          onClick={() => router.push("/auth/signup")}
        >
          Don't have an account?{" "}
          <p className="text-[#800fbc] hover:cursor-pointer hover:underline inline">
            Sign Up
          </p>
        </p>
        <p className="text-zinc-500">or</p>
        <button
          className="w-full bg-white text-black rounded-2xl p-4 hover:cursor-pointer text-xl"
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        >
          <IconBrandGoogleFilled
            size={24}
            stroke={1}
            className="inline mr-2 "
          />
          Sign In with Google
        </button>
      </div>
    </>
  );
}
