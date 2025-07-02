import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Authentication Error</h1>
      <p className="text-lg">
        An error occurred during authentication. Please try again.
      </p>
      <div className="p-4 m-4">
        <Link
          href="/auth/signup"
          className="text-black bg-green-200 px-4 py-2 rounded m-3"
        >
          Sign Up
        </Link>
        <Link
          href="/auth/signin"
          className="text-black bg-blue-200 px-4 py-2 rounded m-3"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
