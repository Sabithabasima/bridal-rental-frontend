"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim() || status === "loading") {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-black px-6 py-24 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-4xl text-center">
        {/* Eyebrow */}
        <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-neutral-400">
          Stay in the AURELIA World
        </p>

        {/* Heading */}
        <h2 className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
          Be the First
          <br />
          to Discover
        </h2>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
          Discover new bridal collections, jewellery edits and exclusive
          AURELIA experiences before anyone else.
        </p>

        {/* Form */}
        {status !== "success" ? (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
            noValidate
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>

            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              disabled={status === "loading"}
              className="h-14 flex-1 border border-neutral-700 bg-transparent px-5 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-white disabled:opacity-50"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="h-14 bg-white px-8 text-xs font-medium uppercase tracking-[0.2em] text-black transition-colors duration-300 hover:bg-neutral-200 disabled:opacity-60"
            >
              {status === "loading" ? "Joining..." : "Join AURELIA"}
            </button>
          </form>
        ) : (
          <div
            role="status"
            aria-live="polite"
            className="mx-auto mt-10 max-w-xl border border-neutral-700 px-6 py-5"
          >
            <p className="font-serif text-xl">Welcome to AURELIA.</p>
            <p className="mt-2 text-sm text-neutral-400">
              You&apos;re now part of our bridal world.
            </p>
          </div>
        )}

        {status === "error" && (
          <p role="alert" className="mt-4 text-xs text-red-400">
            Something went wrong — please try again.
          </p>
        )}

        {/* Small Footer Text */}
        <p className="mt-7 text-[10px] uppercase tracking-[0.2em] text-neutral-600">
          No unnecessary emails. Only beautiful things.
        </p>
      </div>
    </section>
  );
}