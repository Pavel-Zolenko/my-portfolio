import { useState } from 'react';
import {
  ImgThumb,
  ProjectTitle,
  Name,
  ProjectImg,
  BoxButton,
  BtnMore,
  Tech,
} from './ProjectItem.styled.js';
import { Modal } from '../Modal/Modal.jsx';
import { ProjectCard } from '../ProjectCard/ProjectCard';

export const ProjectItem = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = e => {
    setShowModal(!showModal);
  };

  return (
    <li>
      <ImgThumb>
        <ProjectTitle>
          <Name>{project.name}</Name>
          <Tech>
            {project.tech.map(el => (
              <div key={el.type.name}>{el}</div>
            ))}
          </Tech>
        </ProjectTitle>

        <ProjectImg src={project.image} alt={project.name} />
        <BoxButton>
          <BtnMore onClick={toggleModal}>Learn More</BtnMore>
        </BoxButton>

        {showModal && (
          <Modal onClose={toggleModal}>
            <ProjectCard project={project} toggleModal={toggleModal} />
          </Modal>
        )}
      </ImgThumb>
    </li>
  );
};
