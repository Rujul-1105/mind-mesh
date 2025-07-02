import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] p-8">
      <h1 className="text-4xl font-bold mb-4">Authentication Error</h1>
      <p className="text-lg">
        An error occurred during authentication. Please try again.
      </p>
      <div className="p-4 m-4 mb-0">
        <Link
          href="/auth/signup"
          className="text-black bg-blue-300 px-4 py-2 rounded m-3"
        >
          Sign Up
        </Link>
        <p className="inline text-zinc-400">or</p>
        <Link
          href="/auth/signin"
          className="text-black bg-green-300 px-4 py-2 rounded m-3"
        >
          Sign In
        </Link>
      </div>
        <p className="text-zinc-400">To continue</p>
    </div>
  );
}
