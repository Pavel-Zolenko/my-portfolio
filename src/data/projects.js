import { FaHtml5, FaSass } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { nanoid } from 'nanoid';
import { foodsta, filmoteka, webstudio } from 'images';
export const projectList = [
  {
    id: nanoid(4),
    name: 'Webstudio',
    tech: [
      <FaHtml5 size="24" name="HTML" />,
      <FaSass size="24" name="Sass" />,
      <SiJavascript size="24" name="JavaScript" />,
    ],
    link: '',
    github: '',
    image: webstudio,
    descr1: '',
    descr2: '',
    descr3: '',
  },
  {
    id: nanoid(4),
    name: 'Foodsta',
    tech: [
      <FaHtml5 size="24" name="HTML" />,
      <FaSass size="24" name="Sass" />,
      <SiJavascript size="24" name="JavaScript" />,
    ],
    link: '',
    github: '',
    image: foodsta,
    descr1: '',
    descr2: '',
    descr3: '',
  },
  {
    id: nanoid(4),
    name: 'Filmoteka',
    tech: [
      <FaHtml5 size="24" name="HTML" />,
      <FaSass size="24" name="Sass" />,
      <SiJavascript size="24" name="JavaScript" />,
    ],
    link: '',
    github: '',
    image: filmoteka,
    descr1: '',
    descr2: '',
    descr3: '',
  },
];
