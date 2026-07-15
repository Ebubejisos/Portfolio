"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button, ButtonLink } from "./ui/button";

const links = [{ href: "#work", label: "Work" }, { href: "#about", label: "About" }, { href: "#contact", label: "Contact" }];

const shell = "mx-auto w-[min(1180px,calc(100%_-_48px))] max-[900px]:w-[min(calc(100%_-_32px),720px)] max-[650px]:w-full";
const navLink = "flex gap-[7px] rounded-xl px-3.5 py-[11px] text-[.9rem] font-semibold no-underline transition duration-200 hover:-translate-y-px hover:bg-[#eeeaff] max-[650px]:p-3.5";

export function Navigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-10 py-3.5 max-[650px]:px-3 max-[650px]:pt-2 max-[650px]:pb-0 max-[380px]:px-2">
      <nav className={`${shell} flex min-h-16 min-w-0 items-center justify-between rounded-[18px] border border-[rgba(255,255,255,.7)] bg-[rgba(251,251,255,.74)] py-2 pr-2.5 pl-[18px] shadow-[0_12px_40px_rgba(49,85,255,.08)] backdrop-blur-[18px] max-[650px]:relative max-[650px]:min-h-[58px] max-[650px]:max-w-full max-[650px]:py-[7px] max-[650px]:pr-2 max-[650px]:pl-3`} aria-label="Primary navigation">
        <a className="flex min-w-0 items-center gap-2.5 font-[var(--display)] font-bold tracking-[-.02em] no-underline max-[650px]:overflow-hidden max-[650px]:whitespace-nowrap max-[650px]:text-[.84rem]" href="#home"><span className="grid h-[34px] w-[34px] rotate-[-5deg] place-items-center rounded-[10px] bg-[var(--ink)] text-white max-[650px]:h-8 max-[650px]:w-8 max-[650px]:flex-[0_0_32px]">G</span> Gideon Anosike</a>
        <Button variant="icon" size="icon" className="hidden shrink-0 place-items-center max-[650px]:grid [&_svg]:h-5 [&_svg]:w-5" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </Button>
        <div id="mobile-navigation" className={`flex items-center gap-2 max-[650px]:absolute max-[650px]:top-[66px] max-[650px]:left-0 max-[650px]:box-border max-[650px]:w-full max-[650px]:max-w-full max-[650px]:flex-col max-[650px]:items-stretch max-[650px]:overflow-hidden max-[650px]:rounded-2xl max-[650px]:border max-[650px]:border-[var(--line)] max-[650px]:bg-[rgba(251,251,255,.98)] max-[650px]:p-2.5 max-[650px]:shadow-[0_20px_50px_rgba(23,23,27,.14)] ${open ? "max-[650px]:flex" : "max-[650px]:hidden"}`}>
          {links.map((link, index) => <a className={navLink} key={link.href} href={link.href} onClick={() => setOpen(false)}><span className="text-[.67rem] text-[var(--violet)]">0{index + 1}</span>{link.label}</a>)}
          <ButtonLink href="mailto:anosykegideon@gmail.com" variant="solid" className="max-[650px]:w-full">Let’s talk <ArrowUpRight /></ButtonLink>
        </div>
      </nav>
    </header>
  );
}
