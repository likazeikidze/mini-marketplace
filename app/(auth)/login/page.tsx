"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");

    const trimmedEmail = email.trim();

    if (!trimmedEmail || !password) {
      setErrorMessage("Email and password are required.");
      return;
    }

    setLoading(true);
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email: trimmedEmail,
      password,
    });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Log in</h1>
          <p className="text-gray-500">Welcome back. Enter your details.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              className="w-full border rounded p-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              className="w-full border rounded p-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          {errorMessage ? (
            <p className="text-sm text-red-500">{errorMessage}</p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-black text-white py-3 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link className="underline" href="/signup">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
