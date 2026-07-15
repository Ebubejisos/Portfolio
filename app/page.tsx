import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Code2, Mail, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import profileImage from "@/assets/images/IMG-20220829-WA0059.jpg";
import { capabilities, technologies } from "./data";
import { ContactForm } from "./components/contact-form";
import { Navigation } from "./components/navigation";
import { ProjectGrid } from "./components/project-grid";
import { ButtonLink } from "./components/ui/button";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Ebubejisos", icon: Code2 },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gideon-anosike/", icon: BriefcaseBusiness },
  { label: "Email", href: "mailto:anosykegideon@gmail.com", icon: Mail },
];

const shell = "mx-auto w-[min(1180px,calc(100%_-_48px))] max-[900px]:w-[min(calc(100%_-_32px),720px)] max-[650px]:w-[calc(100%_-_24px)] max-[380px]:w-[calc(100%_-_20px)]";
const section = "scroll-mt-20 py-[140px] max-[900px]:py-[100px] max-[650px]:py-[82px]";
const kicker = "mb-[18px] block text-[.74rem] font-extrabold uppercase tracking-[.14em] text-[var(--cobalt)]";
const displayHeading = "my-7 font-[var(--display)] text-[clamp(3.5rem,7vw,6.5rem)] font-bold leading-[.91] tracking-[-.07em] max-[650px]:text-[clamp(3rem,15vw,4.6rem)] max-[650px]:break-words";
const mutedCopy = "text-[var(--muted)]";
const contactLink = "flex items-center gap-2.5 font-bold no-underline [&_svg]:w-[18px] [&_svg]:text-[var(--cobalt)] [&_svg:last-child:not(:first-child)]:w-3.5 max-[650px]:break-words";

export default function Home() {
  return (
    <main>
      <Navigation />
      <section id="home" className={`${shell} relative grid min-h-[930px] grid-cols-[1.2fr_.8fr] items-center gap-[60px] pt-[150px] max-[900px]:min-h-[auto] max-[900px]:grid-cols-1 max-[900px]:gap-[70px] max-[900px]:pt-[145px] max-[900px]:pb-[100px] max-[650px]:pt-[125px] max-[380px]:pt-[115px]`} aria-labelledby="hero-title">
        <div className="pointer-events-none absolute left-[-300px] top-[140px] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle_at_60%_40%,#d7dfff,transparent_68%)] blur-[1px]" />
        <div className="pointer-events-none absolute bottom-[50px] right-[-200px] h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle,#e7d5ff,transparent_68%)] blur-[1px]" />
        <div className="relative z-[2] animate-[enter_.8s_cubic-bezier(.2,.7,.2,1)_both] max-[900px]:min-w-0 max-[900px]:text-center">
          <div className="flex w-max items-center gap-[9px] rounded-full border border-[var(--line)] bg-white px-[13px] py-2 text-[.8rem] font-bold uppercase tracking-[.06em] shadow-[0_8px_28px_rgba(49,85,255,.08)] max-[900px]:mx-auto max-[650px]:max-w-full max-[650px]:text-[.67rem] max-[650px]:tracking-[.04em]"><span className="h-2 w-2 rounded-full bg-[#79c900] shadow-[0_0_0_5px_#efffc7]" /> Available for select projects <Sparkles size={15} /></div>
          <h1 id="hero-title" className="my-7 font-[var(--display)] text-[clamp(4.2rem,8vw,7.9rem)] font-bold leading-[.91] tracking-[-.07em] max-[650px]:text-[clamp(3.15rem,16vw,5.2rem)] max-[650px]:break-words max-[380px]:text-[clamp(2.85rem,16vw,3.7rem)]">Ideas into<br /><span className="relative text-[var(--cobalt)] after:absolute after:left-[2%] after:right-0 after:bottom-[-2px] after:z-[-1] after:h-3.5 after:rounded-full after:bg-[var(--lime)] after:content-[''] after:-rotate-1">digital products.</span></h1>
          <p className={`${mutedCopy} max-w-[620px] text-[clamp(1.08rem,1.7vw,1.3rem)] leading-[1.65] max-[900px]:mx-auto`}>I’m Gideon, a full-stack developer building thoughtful, fast, and reliable web experiences—from interface to infrastructure.</p>
          <div className="mt-[34px] flex flex-wrap gap-3 max-[900px]:justify-center max-[380px]:grid">
            <ButtonLink variant="solid" size="large" href="#work" className="max-[380px]:w-full">Explore my work <ArrowDownRight /></ButtonLink>
            <ButtonLink variant="outline" size="large" href="#contact" className="max-[380px]:w-full">Start a conversation <ArrowUpRight /></ButtonLink>
          </div>
          <div className="mt-[38px] flex flex-wrap gap-5 max-[900px]:justify-center max-[380px]:gap-3" aria-label="Social links">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a className="flex items-center gap-[7px] text-[.88rem] font-bold text-[var(--muted)] no-underline hover:text-[var(--cobalt)] [&_svg]:w-[17px]" key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><Icon /> {label}</a>
            ))}
          </div>
        </div>
        <aside className="relative z-[2] w-[min(100%,410px)] justify-self-end rounded-[28px] border border-[rgba(255,255,255,.85)] bg-[linear-gradient(145deg,rgba(255,255,255,.87),rgba(240,237,255,.63))] p-[15px] shadow-[0_30px_80px_rgba(69,52,160,.16)] rotate-2 animate-[enter_.8s_cubic-bezier(.2,.7,.2,1)_.15s_both] max-[900px]:mx-auto max-[900px]:justify-self-center max-[650px]:max-w-full max-[650px]:rotate-0" aria-label="Developer profile">
          <div className="flex justify-between px-1 py-[5px] pb-3.5 text-[.65rem] font-bold uppercase tracking-[.1em]"><span>Based in Lagos</span><span>NG / WAT</span></div>
          <div className="relative h-[455px] overflow-hidden rounded-[20px] bg-[linear-gradient(145deg,#768cff,#a780ff_60%,#d6ff67)] max-[650px]:h-[390px] max-[380px]:h-[340px]">
            <div className="absolute left-1/2 top-[45%] h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[65px] border-[var(--lime)] opacity-80" />
            <Image className="relative z-[1] h-full w-full object-cover object-[50%_22%]" src={profileImage} alt="Gideon Anosike" priority sizes="(max-width: 900px) 80vw, 390px" />
            <span className="absolute right-3 bottom-[13px] z-[2] grid aspect-square place-items-center rounded-full bg-[var(--lime)] px-[17px] py-[13px] text-center font-[var(--display)] text-[.78rem] font-bold -rotate-[8deg]">Full-stack<br />developer</span>
          </div>
          <p className="mx-[7px] mt-[18px] mb-2 font-[var(--display)] text-xl leading-[1.2]">Building with curiosity,<br />clarity, and care.</p>
        </aside>
      </section>

      <section id="work" className={`${section} ${shell}`} aria-labelledby="work-title">
        <div className="mb-[70px] grid grid-cols-[1.5fr_.7fr] items-end gap-[60px] max-[900px]:grid-cols-1 max-[900px]:gap-[35px]">
          <div><span className={kicker}>Selected work</span><h2 id="work-title" className={displayHeading}>Work with a<br /><em className="font-medium text-[var(--violet)]">reason to exist.</em></h2></div>
          <p className={`${mutedCopy} pb-3 text-[1.08rem] leading-[1.65] max-[900px]:max-w-[580px]`}>A selection of products built around real workflows, useful interactions, and dependable technology.</p>
        </div>
        <ProjectGrid />
      </section>

      <section id="about" className={`${section} relative overflow-hidden bg-[#f1efff] before:absolute before:right-[-250px] before:top-[-160px] before:h-[440px] before:w-[440px] before:rounded-full before:border-[90px] before:border-[var(--lime)] before:opacity-55`}>
        <div className={`${shell} relative grid grid-cols-2 gap-[100px] max-[900px]:grid-cols-1 max-[900px]:gap-[35px]`}>
          <div>
            <span className={kicker}>About me</span>
            <h2 className={`${displayHeading} mt-5`}>Technical thinking,<br /><em className="font-medium text-[var(--violet)]">human outcomes.</em></h2>
          </div>
          <div className="pt-12 max-[900px]:pt-0">
            <p className="font-[var(--display)] text-[1.55rem] font-semibold leading-[1.45] text-[var(--ink)]">I build web products that look sharp, work smoothly, and solve a clear problem.</p>
            <p className={`${mutedCopy} leading-[1.8]`}>My background in pharmacy shaped how I approach software: with attention to detail, structured thinking, and respect for reliable systems. Today I bring that mindset to full-stack development—turning ideas into practical products people can use with confidence.</p>
            <a href="#contact" className="mt-5 inline-flex items-center gap-2 font-extrabold underline-offset-[6px] [&_svg]:w-[18px]">Let’s build something useful <ArrowUpRight /></a>
          </div>
        </div>
        <div className={`${shell} mt-[90px] grid grid-cols-3 gap-3 max-[900px]:grid-cols-1`}>
          {capabilities.map((item) => <article className="rounded-[20px] border border-white bg-[rgba(255,255,255,.72)] p-[30px] backdrop-blur-[10px] transition-transform duration-200 hover:-translate-y-[5px]" key={item.number}><span className="font-[var(--display)] font-bold text-[var(--violet)]">{item.number}</span><h3 className="mt-10 mb-3 font-[var(--display)] text-[1.35rem]">{item.title}</h3><p className={`${mutedCopy} m-0 leading-[1.6]`}>{item.copy}</p></article>)}
        </div>
      </section>

      <section className="bg-[var(--ink)] py-20 text-white max-[650px]:py-16" aria-label="Technologies">
        <div className={`${shell} grid grid-cols-[.3fr_1fr] gap-[60px] max-[900px]:grid-cols-1 max-[900px]:gap-[15px]`}>
          <span className={`${kicker} mt-[11px] text-[var(--lime)]`}>Tools I work with</span>
          <div className="flex flex-wrap gap-2.5">{technologies.map((technology) => <span className="rounded-full border border-[rgba(255,255,255,.18)] px-4 py-3 font-[var(--display)] font-semibold transition duration-200 hover:-rotate-2 hover:border-[var(--lime)] hover:bg-[var(--lime)] hover:text-[var(--ink)]" key={technology}>{technology}</span>)}</div>
        </div>
      </section>

      <section id="contact" className={`${section} relative overflow-hidden`}>
        <div className="absolute left-[-250px] bottom-[-150px] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,#d9e0ff,transparent_65%)]" />
        <div className={`${shell} relative grid grid-cols-[.9fr_1.1fr] gap-[100px] max-[900px]:grid-cols-1 max-[900px]:gap-[60px]`}>
          <div>
            <span className={kicker}>Get in touch</span>
            <h2 className={displayHeading}>Have an idea?<br /><em className="font-medium text-[var(--violet)]">Let’s make it real.</em></h2>
            <p className={`${mutedCopy} max-w-[540px] text-[1.08rem] leading-[1.7]`}>Whether you’re planning a new product, improving an existing one, or looking for a developer to join the work—I’d like to hear about it.</p>
            <div className="mt-[34px] grid gap-3.5">
              <a className={contactLink} href="mailto:anosykegideon@gmail.com"><Mail /> anosykegideon@gmail.com</a>
              <a className={contactLink} href="https://www.linkedin.com/in/gideon-anosike/" target="_blank" rel="noreferrer"><BriefcaseBusiness /> LinkedIn <ArrowUpRight /></a>
              <a className={contactLink} href="https://github.com/Ebubejisos" target="_blank" rel="noreferrer"><Code2 /> GitHub <ArrowUpRight /></a>
              <span className={contactLink}><MapPin /> Lagos, Nigeria</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className={`${shell} flex min-h-[110px] items-center justify-between gap-5 border-t border-[var(--line)] text-[.8rem] text-[var(--muted)] max-[650px]:flex-col max-[650px]:py-8 max-[650px]:text-center`}>
        <a className="flex min-w-0 items-center gap-2.5 font-[var(--display)] text-[.9rem] font-bold tracking-[-.02em] text-[var(--ink)] no-underline max-[650px]:order-[-1]" href="#home" aria-label="Back to top"><span className="grid h-7 w-7 rotate-[-5deg] place-items-center rounded-[10px] bg-[var(--ink)] text-white">G</span> Gideon Anosike</a>
        <p>Designed and built with intention.</p>
        <p>© {new Date().getFullYear()} Gideon Anosike</p>
      </footer>
    </main>
  );
}
