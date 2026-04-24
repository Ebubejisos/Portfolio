import inventory from '../../assets/images/Drug-inventory.png';
import promptopia from '../../assets/images/Promptopia.png';
import cvBuilder from '../../assets/images/CV-creator.png';
import krypt from '../../assets/images/Krypt.png';

type Project = {
  name?: string;
  description?: string;
  repoLink?: string;
  liveLink?: string;
  imgSrc?: string;
  id: number;
}

export const projects: Project[] = [
  {
    name: 'Inventory Tracker',
    description: 'Manage your inventory with ease, add items, update stock levels, and track your inventory in real-time. Built with nextjs, typescript, postgres and express',
    repoLink: 'https://github.com/Ebubejisos/Inventory-Tracker',
    liveLink: 'https://inventory-tracker-gold-two.vercel.app/',
    imgSrc: inventory,
    id: 0,
  },
  {
    name: 'Promptopia',
    description: 'A next app with typescript, mongodb, with nextauth google login and credetials log in and more :)',
    repoLink: 'https://github.com/Ebubejisos/Promptopia',
    liveLink: 'https://next-js-promptopia-two.vercel.app/',
    imgSrc: promptopia,
    id: 1,
  },
  {
    name: 'CV-Builder',
    description: 'CV-Builder helps you create your cv after filling in your necessary information and can be downloaded as a pdf. Built with react and inspired by https://www.theodinproject.com/',
    repoLink: 'https://github.com/Ebubejisos/CV-React-app',
    liveLink: 'https://ebubejisos.github.io/CV-React-app/',
    imgSrc: cvBuilder,
    id: 2,
  },
  {
    name: 'Krypt',
    description: ' Krypt is my first web3.0 app which allows transfer of sepolia test ETH between users, login with metamask and start transferring test ETH',
    repoLink: 'https://github.com/Ebubejisos/Krypt',
    liveLink: 'https://web3-0-krypt.vercel.app/',
    imgSrc: krypt,
    id: 3,
  }
]