"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { IconBrandGoogleFilled } from "@tabler/icons-react";

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ email, password, name }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      // Optional: auto-login after sign-up
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/dashboard",
      });
    } else {
      const data = await res.json();
      setError(data.error || "Something went wrong");
    }
  };

  return (
    <>
      <div className="space-y-4 max-w-md mx-auto mt-10 flex flex-col items-center p-5">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-md mx-auto mt-10"
        >
          <h1 className="text-2xl font-bold">Sign Up</h1>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full border p-2 rounded"
          />

          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-400 text-black rounded-2xl p-4 hover:cursor-pointer"
          >
            Sign Up
          </button>
        </form>
        <p
          className="text-zinc-500"
          onClick={() => router.push("/auth/signin")}
        >
          Already have an account? <p className="text-blue-500 hover:cursor-pointer hover:underline inline">Sign In</p>
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
          Sign Up with Google
        </button>
      </div>
    </>
  );
}
