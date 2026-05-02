import javascript from '../../assets/icons/icons8-javascript.svg';
import css from '../../assets/icons/icons8-css3.svg';
import react from '../../assets/icons/icons8-react-native.svg';
import typescript from '../../assets/icons/icons8-typescript.svg';
import nextjs from '../../assets/icons/icons8-next.js.svg';
import mongo from '../../assets/icons/mongodb.svg';

interface Skill {
  name?: string;
  level?: string | number;
  id: number | string;
  logoSrc?: string;
}

export const codingSkills: Skill[] = [
  {
    name: 'Javascript',
    level: '98%',
    logoSrc: javascript,
    id: 1,
  },
  {
    name: 'Cascading Style Sheets, CSS',
    level: '93%',
    logoSrc: css,
    id: 2,
  },
  {
    name: 'React',
    level: '94%',
    logoSrc: react,
    id: 3,
  },
  {
    name: 'Typescript',
    level: '88%',
    logoSrc: typescript,
    id: 4,
  },
  {
    name: 'NextJs',
    level: '92%',
    logoSrc: nextjs,
    id: 5,
  },
  {
    name: 'ExpressJs and databases',
    level: '85%',
    logoSrc: mongo,
    id: 6,
  },
];
