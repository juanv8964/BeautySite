"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function AdminLoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      setErrorMessage("");

      const response = await fetch("/api/admin/login", {
        body: JSON.stringify({ password, username }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Login failed.");
      }

      router.push("/admin");
      router.refresh();
    } catch (error) {
      console.error("Admin login error:", error);
      setErrorMessage("Invalid username or password.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="glass-card w-full max-w-xl overflow-hidden p-8 shadow-glow sm:p-10">
      <div className="mb-8 border-b border-white/10 pb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blush">
          Admin Login
        </p>
        <h1 className="mt-4 font-display text-5xl text-white sm:text-6xl">
          Access Your Leads
        </h1>
        <p className="mt-4 max-w-lg text-base leading-7 text-muted">
          Sign in to securely review recent inquiries and manage BeautySite Builder
          dashboard activity.
        </p>
      </div>

      <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
        <label className="grid gap-2 text-sm text-muted">
          <span>Username</span>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="w-full rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-muted focus:border-blush/60 focus:bg-white/10"
            placeholder="Enter admin username"
            autoComplete="username"
          />
        </label>

        <label className="grid gap-2 text-sm text-muted">
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-muted focus:border-blush/60 focus:bg-white/10"
            placeholder="Enter admin password"
            autoComplete="current-password"
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-blush px-6 py-4 text-base font-semibold text-base shadow-glow transition hover:bg-[#ffc1da] disabled:cursor-not-allowed disabled:opacity-80"
        >
          {isSubmitting ? "Signing In..." : "Sign In"}
        </button>

        {errorMessage ? (
          <p className="rounded-2xl border border-rose-300/20 bg-rose-300/10 px-4 py-3 text-sm text-rose-100">
            {errorMessage}
          </p>
        ) : null}
      </form>
    </div>
  );
}
