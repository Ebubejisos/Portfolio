"use client";

import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "./ui/button";

type Status = { type: "idle" | "success" | "error"; message: string };

const labelClassName = "mb-5 grid gap-[9px] text-[.82rem] font-extrabold";
const fieldClassName =
  "w-full resize-y rounded-xl border border-[var(--line)] bg-[#f9f9ff] px-[15px] py-3.5 text-[var(--ink)] outline-none transition duration-200 focus:border-[var(--cobalt)] focus:bg-white focus:shadow-[0_0_0_4px_rgba(49,85,255,.1)]";
const statusClassNames: Record<Status["type"], string> = {
  idle: "text-[var(--muted)]",
  success: "text-[#327000]",
  error: "text-[#b42318]",
};

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });
  const statusClassName = `m-0 max-w-[250px] text-[.78rem] ${statusClassNames[status.type]}`;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setStatus({ type: "idle", message: "" });
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    if (values.company) {
      setSending(false);
      return;
    }
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
        error?: string;
      };
      if (!response.ok)
        throw new Error(
          data.error ?? "Something went wrong. Please try again.",
        );
      setStatus({
        type: "success",
        message: data.message ?? "Message sent. I’ll be in touch soon.",
      });
      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your message.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      className="rounded-3xl border border-[rgba(255,255,255,.8)] bg-[rgba(255,255,255,.72)] p-[34px] shadow-[0_24px_70px_rgba(49,85,255,.1)] backdrop-blur-[18px] max-[650px]:min-w-0 max-[650px]:p-[22px] max-[380px]:p-[18px]"
      onSubmit={submit}
    >
      <div className="grid grid-cols-2 gap-4 max-[650px]:grid-cols-1">
        <label className={labelClassName}>
          Name
          <input
            className={fieldClassName}
            name="name"
            autoComplete="name"
            minLength={2}
            maxLength={80}
            required
            placeholder="Your name"
          />
        </label>
        <label className={labelClassName}>
          Email
          <input
            className={fieldClassName}
            name="email"
            type="email"
            autoComplete="email"
            maxLength={160}
            required
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className={labelClassName}>
        What are you working on?
        <textarea
          className={fieldClassName}
          name="message"
          minLength={10}
          maxLength={3000}
          rows={6}
          required
          placeholder="Tell me a little about your idea, team, or opportunity..."
        />
      </label>
      <label className="!absolute !left-[-9999px]" aria-hidden="true">
        Company
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="flex items-center justify-between gap-5 max-[650px]:flex-col max-[650px]:items-stretch">
        <p className={statusClassName} role="status" aria-live="polite">
          {status.message || "I usually respond within 24–48 hours."}
        </p>
        <Button type="submit" variant="solid" className="max-[650px]:w-full" disabled={sending}>
          {sending ? (
            <>
              <LoaderCircle className="animate-spin" /> Sending
            </>
          ) : (
            <>
              Send message <ArrowUpRight />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
