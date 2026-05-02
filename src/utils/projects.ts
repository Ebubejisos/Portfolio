import inventory from '../../assets/images/Drug-inventory.png';
import promptopia from '../../assets/images/Promptopia.png';
import cvBuilder from '../../assets/images/CV-creator.png';
import krypt from '../../assets/images/Krypt.png';

import inventoryDemo from '../../assets/videos/inventory-demo.webm';
import cvBuilderDemo from '../../assets/videos/cvCreator-demo.webm';


type Project = {
  name?: string;
  description?: string;
  // include key features and techstack as other optional properties if needed    
  features?: string[];
  techStack?: string[];
  repoLink?: string;
  liveLink?: string;
  imgSrc?: string;
  videoSrc?: string;
  id: number;
}

export const projects: Project[] = [
  {
    name: 'Inventory Tracker',
    description: 'A full-stack inventory management system designed to help pharmacies efficiently track and manage products. The application reduces reliance on manual processes by providing a structured and user-friendly interface for handling inventory data in real time.',
    features: [
      'Real-time inventory tracking',
      'User-friendly interface',
      'Efficient product management'
    ],
    techStack: [
      'PostgreSQL',
      'Express.js',
      'NextJs',
      'Node.js',
    ],
    repoLink: 'https://github.com/Ebubejisos/Inventory-Tracker',
    liveLink: 'https://inventory-tracker-gold-two.vercel.app/',
    imgSrc: inventory,
    videoSrc: inventoryDemo,
    id: 0,
  },
  {
    name: 'Promptopia',
    description: 'A full-stack web platform that allows users to create accounts and share useful AI prompts with a wider community. The application focuses on discoverability and collaboration through structured content and hashtag-based search.',
    features: [
      'User account creation',
      'AI prompt sharing',
      'Hashtag-based search'
    ],
    techStack: [
      'Next.js',
      'Typescript',
      'MongoDB',
      'Next Auth',
    ],
    repoLink: 'https://github.com/Ebubejisos/Promptopia',
    liveLink: 'https://next-js-promptopia-two.vercel.app/',
    imgSrc: promptopia,
    videoSrc: '',
    id: 1,
  },
  {
    name: 'CV-Builder',
    description: 'A web-based application that simplifies the process of creating professional CVs. It provides a structured interface for users to input their details and instantly generate a clean, well-formatted resume.',
    features: [
      'User-friendly interface',
      'Instant CV generation'
    ],
    techStack: [
      'React',
    ],
    repoLink: 'https://github.com/Ebubejisos/CV-React-app',
    liveLink: 'https://ebubejisos.github.io/CV-React-app/',
    imgSrc: cvBuilder,
    videoSrc: cvBuilderDemo,
    id: 2,
  },
  {
    name: 'Krypt',
    description: ' Krypt is a decentralized web application that enables users to connect their wallet and transfer Sepolia testnet ETH securely. The project demonstrates integration with blockchain networks and real-time transaction handling using modern Web3 tools.',
    features: [
      'Wallet integration',
      'Secure ETH transfers',
      'Real-time transaction handling'
    ],
    techStack: [
      'React',
      'Web3.js'
    ],
    repoLink: 'https://github.com/Ebubejisos/Krypt',
    liveLink: 'https://web3-0-krypt.vercel.app/',
    imgSrc: krypt,
    videoSrc: '',
    id: 3,
  }
]