import { nanoid } from 'nanoid';
import { FaReact, FaHtml5, FaSass } from 'react-icons/fa';
import {
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiReact,
  SiFramer,
  SiTypescript,
} from 'react-icons/si';

import { foodsta, filmoteka, webstudio, phonebook, playstation } from 'images';
import mui from 'images/mui.svg';
import zustandIcon from 'images/icons/zustand.svg';
import swiperIcon from 'images/icons/swiper2.svg';

export const projectList = [
  {
    id: nanoid(4),
    name: 'Playstation-clone',
    tech: [
      <SiReact size="24" name="React" />,
      <SiTypescript size="24" name="TypeScript" />,
      <SiTailwindcss size="24" name="Tailwind" />,
      <SiFramer size="24" name="Framer" />,
      <img src={zustandIcon} alt="zustand icon" width="24" height="24" />,
      <img src={swiperIcon} alt="swiper icon" width="24" height="24" />,
    ],
    link: 'https://pavel-zolenko.github.io/playstation-clone',
    github: 'https://github.com/Pavel-Zolenko/playstation-clone',
    image: playstation,
    descr1: 'Clone of PlayStation interface',
    descr2:
      'Interactive UI clone with TypeScript, Tailwind CSS for styling, Framer Motion for animations, React Hotkeys Hook for keyboard shortcuts, Zustand for state management, and Swiper for carousel functionality',
    descr3: 'Design: PlayStation. Assembly: Vite',
  },
  {
    id: nanoid(4),
    name: 'Phonebook',
    tech: [
      <FaReact size="24" name="React" />,
      <SiJavascript size="24" name="JavaScript" />,
      <SiRedux size="24" name="JavaScript" />,
      <img src={mui} alt="mui icon" width="24" height="24" />,
    ],
    link: 'https://pavel-zolenko.github.io/my-phonebook',
    github: 'https://github.com/Pavel-Zolenko/my-phonebook',
    image: phonebook,
    descr1: 'Own project: website for saving contacts in a phonebook',
    descr2:
      'Adaptive layout with three breakpoints (480px, 768px, 1280px). Used libraries: emotions, react-router-dom, materialUI, redux, axios. The application saves contact data on the backend.',
    descr3: 'Design: own. Assembly: Create React App',
  },
  {
    id: nanoid(4),
    name: 'Filmoteka',
    tech: [
      <SiJavascript size="24" name="JavaScript" />,
      <FaReact size="24" name="React" />,
    ],
    link: 'https://pavel-zolenko.github.io/goit-react-hw-05-movies_1',
    github: 'https://github.com/Pavel-Zolenko/goit-react-hw-05-movies_1',
    image: filmoteka,
    descr1: 'Own project: website for searching movies and actors',
    descr2:
      'Adaptive layout with three breakpoints (480px, 768px, 1280px). Free themoviedb.org API is used as backend. Used libraries: emotions, react-router-dom, react-loader-spinner, axios. Favorites in Library and Photoalbum are persisted using localStorage',
    descr3: 'Design: own. Assembly: Create React App',
  },
  {
    id: nanoid(4),
    name: 'Webstudio',
    tech: [<FaHtml5 size="24" name="HTML" />, <FaSass size="24" name="Sass" />],
    link: 'https://pavel-zolenko.github.io/goit-markup-hw-08/index.html',
    github: 'https://github.com/Pavel-Zolenko/goit-markup-hw-08',
    image: webstudio,
    descr1: 'Practical markup task: website',
    descr2:
      'Adaptive layout with three breakpoints (480px, 768px, 1200px). For screen width below 480px - responsive layout. The menu is implemented with anchor links that lead to the corresponding sections of the page. Images are optimized for retina displays, also added images in webp format for faster loading',
    descr3: 'Design: Figma',
  },
  {
    id: nanoid(4),
    name: 'Foodsta',
    tech: [
      <FaHtml5 size="24" name="HTML" />,
      <FaSass size="24" name="Sass" />,
      <SiJavascript size="24" name="JavaScript" />,
    ],
    link: 'https://pavel-zolenko.github.io/Food_Sta/',
    github: 'https://github.com/Pavel-Zolenko/Food_Sta',
    image: foodsta,
    descr1: 'Team-project #1: website. Role: developer. Group: 6 students',
    descr2:
      'Adaptive layout with three breakpoints (480px, 768px, 1280px). For screen width below 480px - responsive layout. The menu is implemented with anchor links that lead to the corresponding sections of the page. Images are optimized for retina displays, also added images in webp format for faster loading. Validation is enabled in the fields of the modal window and Subscribe sections',
    descr3: 'Design: Figma. Assembly: Parcel',
  },
];
