interface Skill {
  name?: string;
  level?: string | number;
  id: number | string;
  logoSrc?: string;
}

export const codingSkills: Skill[] = [
  {
    name: 'Javascript',
    level: '90%',
    logoSrc: './src/assets/icons/icons8-javascript.svg',
    id: 1,
  },
  {
    name: 'Cascading Style Sheets, CSS',
    level: '93%',
    logoSrc: './src/assets/icons/icons8-css3.svg',
    id: 2,
  },
  {
    name: 'React',
    level: '89%',
    logoSrc: './src/assets/icons/icons8-react-native.svg',
    id: 3,
  },
  {
    name: 'Typescript',
    level: '84%',
    logoSrc: './src/assets/icons/icons8-typescript.svg',
    id: 4,
  },
  {
    name: 'NextJs',
    level: '76%',
    logoSrc: './src/assets/icons/icons8-next.js.svg',
    id: 5,
  },
  {
    name: 'MongoDB',
    level: '72%',
    logoSrc: './src/assets/icons/mongodb.svg',
    id: 6,
  },
];
