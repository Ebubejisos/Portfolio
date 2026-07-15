import inventory from "@/assets/images/Drug-inventory.png";
import promptopia from "@/assets/images/Promptopia.png";
import cvBuilder from "@/assets/images/CV-creator.png";
import krypt from "@/assets/images/Krypt.png";

export const projects = [
  {
    title: "Inventory Tracker",
    eyebrow: "Pharmacy operations",
    summary: "A full-stack inventory system that helps pharmacies organize products, search stock, and replace fragile manual workflows.",
    features: ["Real-time inventory tracking", "Product search and filtering", "Responsive product management"],
    stack: ["Next.js", "Express", "PostgreSQL", "Node.js"],
    image: inventory,
    demo: "/videos/inventory-demo.webm",
    repository: "https://github.com/Ebubejisos/Inventory-Tracker",
    live: "https://inventory-tracker-gold-two.vercel.app/",
    accent: "cobalt",
  },
  {
    title: "Promptopia",
    eyebrow: "Community platform",
    summary: "A social platform for discovering, creating, and sharing useful AI prompts through searchable profiles and hashtags.",
    features: ["Account authentication", "Dynamic creator profiles", "Prompt and hashtag discovery"],
    stack: ["Next.js", "TypeScript", "MongoDB", "API Routes"],
    image: promptopia,
    demo: "/videos/promptopia-demo.mp4",
    repository: "https://github.com/Ebubejisos/Promptopia",
    live: "https://next-js-promptopia-two.vercel.app/",
    accent: "violet",
  },
  {
    title: "CV Builder",
    eyebrow: "Productivity tool",
    summary: "A focused web app that turns structured user input into a clean, ready-to-use professional CV with instant preview.",
    features: ["Guided information entry", "Instant CV generation", "Live document preview"],
    stack: ["React", "REST APIs", "CSS"],
    image: cvBuilder,
    demo: "/videos/cvCreator-demo.webm",
    repository: "https://github.com/Ebubejisos/CV-React-app",
    live: "https://ebubejisos.github.io/CV-React-app/",
    accent: "lime",
  },
  {
    title: "Krypt",
    eyebrow: "Web3 experiment",
    summary: "A decentralized application for connecting a wallet and transferring Sepolia testnet ETH with clear transaction feedback.",
    features: ["Wallet connection", "Secure testnet transfers", "Transaction state feedback"],
    stack: ["React", "Solidity", "Ethers.js", "Web3"],
    image: krypt,
    demo: null,
    repository: "https://github.com/Ebubejisos/Krypt",
    live: "https://web3-0-krypt.vercel.app/",
    accent: "orange",
  },
] as const;

export type Project = (typeof projects)[number];

export const capabilities = [
  { number: "01", title: "Product interfaces", copy: "Responsive, accessible experiences that make complex workflows feel clear." },
  { number: "02", title: "Full-stack systems", copy: "Web applications that connect polished interfaces to dependable APIs and data." },
  { number: "03", title: "Existing products", copy: "Thoughtful feature upgrades, design refinement, and maintainable frontend improvements." },
];

export const technologies = ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "CSS"];
