import { NextResponse } from "next/server";
import { Resend } from "resend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    if (typeof body.company === "string" && body.company) return NextResponse.json({ success: true, message: "Message received." });
    if (name.length < 2 || name.length > 80 || !emailPattern.test(email) || email.length > 160 || message.length < 10 || message.length > 3000) return NextResponse.json({ success: false, error: "Please check your name, email, and message." }, { status: 400 });
    if (!process.env.RESEND_API_KEY) return NextResponse.json({ success: false, error: "Messaging is temporarily unavailable. Please email me directly." }, { status: 503 });

    const resend = new Resend(process.env.RESEND_API_KEY);
    const safeName = escapeHtml(name); const safeEmail = escapeHtml(email); const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
    const owner = await resend.emails.send({ from: "Portfolio <noreply@codergidingz.xyz>", to: ["anosykegideon@gmail.com"], replyTo: email, subject: `New portfolio message from ${name}`, html: `<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#17171b"><p style="color:#4f46e5;font-weight:700">NEW PORTFOLIO MESSAGE</p><h1>${safeName}</h1><p><a href="mailto:${safeEmail}">${safeEmail}</a></p><div style="background:#f5f3ff;border-left:4px solid #7c3aed;padding:20px;line-height:1.7">${safeMessage}</div></div>` });
    if (owner.error) throw owner.error;
    await resend.emails.send({ from: "Gideon Portfolio <noreply@codergidingz.xyz>", to: [email], replyTo: "anosykegideon@gmail.com", subject: "Thanks for reaching out", html: `<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#17171b"><h1>Thanks for reaching out, ${safeName}.</h1><p style="line-height:1.7">I’ve received your message and will get back to you as soon as I can, usually within 24–48 hours.</p><p>— Gideon</p></div>` });
    return NextResponse.json({ success: true, message: "Thanks—your message is on its way." });
  } catch {
    return NextResponse.json({ success: false, error: "I couldn’t send that message. Please email me directly." }, { status: 500 });
  }
}
