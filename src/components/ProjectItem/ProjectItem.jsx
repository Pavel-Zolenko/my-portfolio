import { FaReact, FaHtml5, FaSass, FaNodeJs } from 'react-icons/fa';
import {
  SiJavascript,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
} from 'react-icons/si';
import {
  ImgThumb,
  ProjectTitle,
  Name,
  ProjectImg,
  BoxButton,
  BtnMore,
  Tech,
} from './ProjectItem.styled.js';

export const ProjectItem = ({ project }) => {
  return (
    <li>
      <ImgThumb>
        <ProjectTitle>
          <Name>{project.name}</Name>
          <Tech>
            <FaHtml5 size="24" name="HTML" />
            <FaSass size="24" name="Sass" />
            <SiJavascript size="24" name="JavaScript" />
          </Tech>
        </ProjectTitle>

        <ProjectImg src={project.image} alt={project.name} />
        <BoxButton>
          <BtnMore>Learn More</BtnMore>
        </BoxButton>
      </ImgThumb>
    </li>
  );
};
