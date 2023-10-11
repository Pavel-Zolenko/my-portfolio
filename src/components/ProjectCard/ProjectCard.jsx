import { MdClose } from 'react-icons/md';
import {
  Description,
  Card,
  NameDiv,
  NameLink,
  Tech,
  GithubLink,
  BtnClose,
  Text,
} from './ProjectCard.styled';

export const ProjectCard = ({ project, toggleModal }) => {
  return (
    <Card>
      <img src={project.image} alt={project.name} width="100%" />

      <Description>
        <NameDiv>
          <NameLink href={project.link} target="_blank">
            {project.name}
          </NameLink>
          <Tech>
            {project.tech.map(el => (
              <div>{el}</div>
            ))}
          </Tech>
          <GithubLink href={project.github} target="_blank">
            github code
          </GithubLink>
        </NameDiv>
        <Text>{project.descr1}</Text>
        <Text>{project.descr2}</Text>
        <Text>{project.descr3}</Text>
      </Description>

      <BtnClose type="button" onClick={toggleModal}>
        <MdClose size={24} />
      </BtnClose>
    </Card>
  );
};
