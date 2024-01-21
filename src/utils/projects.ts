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
    name: 'Promptopia',
    description: 'A next app with typescript, mongodb, with nextauth google login and credetials log in and more :)',
    repoLink: 'https://github.com/Ebubejisos/Promptopia',
    liveLink: 'https://next-js-promptopia-two.vercel.app/',
    imgSrc: 'assets/images/stones.jpg',
    id: 1,
  },
  {
    name: 'CV-Builder',
    description: 'CV-Builder helps you create your cv after filling in your necessary information and can be downloaded as a pdf. Built with react and inspired by https://www.theodinproject.com/',
    repoLink: 'https://github.com/Ebubejisos/CV-React-app',
    liveLink: 'https://ebubejisos.github.io/CV-React-app/',
    imgSrc: 'assets/images/stones.jpg',
    id: 2,
  },
  {
    name: 'Krypt',
    description: ' Krypt is my first web3.0 app which allows transfer of sepolia test ETH between users, login with metamask and start transferring test ETH',
    repoLink: 'https://github.com/Ebubejisos/Krypt',
    liveLink: 'https://web3-0-krypt.vercel.app/',
    imgSrc: 'assets/images/stones.jpg',
    id: 3,
  },
  {
    name: 'Color Memory',
    description: 'How well do you memorize? Play a simple game of color memory and avoid picking a color more than once and avoid running out of time. Built on react and inspired by https://www.theodinproject.com/',
    repoLink: 'https://github.com/Ebubejisos/React-starter/tree/memoryCard',
    liveLink: 'https://ebubejisos.github.io/React-starter/',
    imgSrc: 'assets/images/stones.jpg',
    id: 4,
  },
]