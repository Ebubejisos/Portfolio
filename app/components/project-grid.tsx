"use client";

import { ArrowUpRight, Code2, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projects, type Project } from "../data";
import { Button } from "./ui/button";

const accentBackgrounds: Record<Project["accent"], string> = {
  cobalt: "bg-[#dfe5ff]",
  violet: "bg-[#e8dcff]",
  lime: "bg-[#eaffb5]",
  orange: "bg-[#ffe0cc]",
};

const projectMedia = "relative block aspect-[1.35] w-full overflow-hidden rounded-[28px] border-0 p-[46px] transition-[transform,box-shadow] duration-300 hover:-translate-y-[7px] hover:shadow-[0_28px_60px_rgba(49,85,255,.12)] max-[650px]:aspect-[1.1] max-[650px]:min-w-0 max-[650px]:p-[26px] max-[380px]:p-[19px] [&_img]:h-full [&_img]:w-full [&_img]:rounded-[13px] [&_img]:object-cover [&_img]:object-top [&_img]:shadow-[0_24px_55px_rgba(23,23,27,.2)] [&_img]:transition-transform [&_img]:duration-500 hover:[&_img]:scale-[1.025]";
const projectEyebrow = "text-[.75rem] font-extrabold uppercase tracking-[.12em] text-[var(--cobalt)]";
const projectTitle = "my-[12px] mb-[18px] font-[var(--display)] text-[clamp(2.25rem,4vw,3.5rem)] tracking-[-.055em] max-[650px]:text-[2.45rem]";
const mutedText = "text-[var(--muted)] leading-[1.7]";
const projectLinks = "flex flex-wrap gap-[18px] [&_a]:flex [&_a]:items-center [&_a]:gap-[7px] [&_a]:text-[.86rem] [&_a]:font-extrabold [&_a]:underline-offset-[5px] [&_svg]:w-4";

export function ProjectGrid() {
  const [selected, setSelected] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (selected) {
      if (!dialogRef.current?.open) dialogRef.current?.showModal();
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        void videoRef.current.play();
      }
    }
    else if (dialogRef.current?.open) dialogRef.current.close();
  }, [selected]);

  return (
    <>
      <div className="grid gap-[110px] max-[650px]:gap-20">
        {projects.map((project, index) => (
          <article className={`grid items-center gap-[52px] max-[900px]:grid-cols-1 max-[900px]:gap-8 ${index % 2 === 0 ? "grid-cols-[1.35fr_.65fr]" : "grid-cols-[.65fr_1.35fr]"}`} key={project.title}>
            <Button variant="unstyled" className={`${projectMedia} ${accentBackgrounds[project.accent]} ${index % 2 === 0 ? "" : "order-2 max-[900px]:order-1"}`} onClick={() => setSelected(project)} aria-label={`View details for ${project.title}`}>
              <span className="absolute top-[17px] left-5 font-[var(--display)] font-bold">0{index + 1}</span>
              <Image src={project.image} alt={`${project.title} application interface`} sizes="(max-width: 800px) 92vw, 50vw" />
              <span className="absolute right-[18px] bottom-[17px] flex items-center gap-[7px] rounded-xl bg-[rgba(255,255,255,.9)] px-[13px] py-2.5 text-[.8rem] font-bold shadow-[0_10px_30px_rgba(23,23,27,.12)] max-[650px]:right-2.5 max-[650px]:bottom-2.5 [&_svg]:w-4">View project <ArrowUpRight /></span>
            </Button>
            <div className={`${index % 2 === 0 ? "" : "order-1 max-[900px]:order-2"} max-[900px]:max-w-[650px]`}>
              <span className={projectEyebrow}>{project.eyebrow}</span>
              <h3 className={projectTitle}>{project.title}</h3>
              <p className={mutedText}>{project.summary}</p>
              <div className="my-6 flex flex-wrap gap-[7px]">{project.stack.map((item) => <span className="rounded-full border border-[var(--line)] bg-white px-2.5 py-[7px] text-[.72rem] font-bold" key={item}>{item}</span>)}</div>
              <div className={projectLinks}>
                <a href={project.live} target="_blank" rel="noreferrer">Live site <ExternalLink /></a>
                <a href={project.repository} target="_blank" rel="noreferrer">Source <Code2 /></a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <dialog ref={dialogRef} className="m-auto max-h-[min(88vh,760px)] w-[min(1040px,calc(100%_-_32px))] overflow-auto rounded-[30px] border border-[rgba(255,255,255,.72)] bg-transparent p-0 shadow-[0_35px_100px_rgba(15,12,35,.35)] open:animate-[dialog-in_.3s_cubic-bezier(.2,.8,.2,1)_both] backdrop:bg-[rgba(14,13,24,.68)] backdrop:backdrop-blur-[12px] backdrop:backdrop-saturate-[.8] max-[650px]:max-h-[92vh] max-[650px]:w-[calc(100%_-_20px)] max-[650px]:rounded-[23px]" onCancel={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
        {selected && <div className="relative grid min-h-[560px] grid-cols-[minmax(0,1.15fr)_minmax(300px,.85fr)] gap-[38px] rounded-[29px] bg-[linear-gradient(145deg,#fff_45%,#f5f2ff)] p-[18px] max-[650px]:min-h-0 max-[650px]:grid-cols-1 max-[650px]:gap-0 max-[650px]:rounded-[22px] max-[650px]:p-2.5">
          <Button variant="icon" size="icon" className="absolute right-[18px] top-[18px] z-[2] rounded-full max-[650px]:right-3.5 max-[650px]:top-3.5" onClick={() => setSelected(null)} aria-label="Close project details"><X /></Button>
          <div className={`grid min-w-0 place-items-center overflow-hidden rounded-[20px] p-[22px] max-[650px]:min-h-[260px] max-[650px]:px-3 max-[650px]:pt-[30px] max-[650px]:pb-3 ${accentBackgrounds[selected.accent]} [&_img]:block [&_img]:w-full [&_img]:rounded-[13px] [&_img]:shadow-[0_18px_45px_rgba(23,23,27,.2)]`}>
            {selected.demo ? <video className="block h-full w-full max-h-[590px] rounded-[13px] bg-[#111] object-contain shadow-[0_18px_45px_rgba(23,23,27,.2)] max-[650px]:max-h-[46vh]" ref={videoRef} key={selected.title} src={selected.demo} autoPlay muted loop playsInline controls aria-label={`${selected.title} product demo`} /> : <Image className="max-h-[590px]" src={selected.image} alt={`${selected.title} interface`} />}
          </div>
          <div className="self-center py-10 pr-7 pl-0 max-[650px]:px-[18px] max-[650px]:pt-6 max-[650px]:pb-7">
            <span className={projectEyebrow}>{selected.eyebrow}</span><h3 className={projectTitle}>{selected.title}</h3><p className={mutedText}>{selected.summary}</p>
            <h4 className="mt-[26px] mb-2 font-[var(--display)]">What it does</h4><ul className="mb-7 pl-[19px] text-[var(--muted)] leading-[1.8]">{selected.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <div className={projectLinks}><a href={selected.live} target="_blank" rel="noreferrer">Open live site <ExternalLink /></a><a href={selected.repository} target="_blank" rel="noreferrer">View source <Code2 /></a></div>
          </div>
        </div>}
      </dialog>
    </>
  );
}
