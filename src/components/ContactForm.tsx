"use client";

import { useState } from "react";
import { services } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      setMessage(json.message || "Thanks! We'll be in touch shortly.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error ? err.message : "Something went wrong. Please call us instead.",
      );
    }
  }

  const inputClasses =
    "mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition-colors focus:border-sky-500 focus:ring-2 focus:ring-sky-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-sm font-medium text-slate-700"
          >
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="text-sm font-medium text-slate-700"
          >
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="service" className="text-sm font-medium text-slate-700">
          What do you need?
        </label>
        <select id="service" name="service" className={inputClasses}>
          <option value="">Not sure yet</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other / general question</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-slate-700">
          Describe the problem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="e.g. My water bill doubled and I hear running water under the floor."
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Request My Quote"}
      </button>

      {status === "success" && (
        <p className="rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
          ✅ {message}
        </p>
      )}
      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
          ⚠️ {message}
        </p>
      )}
    </form>
  );
}
