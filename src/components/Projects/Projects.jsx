import { projectList } from 'data/projects';
import { ProjectItem } from '../ProjectItem/ProjectItem.jsx';
import { List, ProjectsContainer } from './Projects.styled.js';

export const Projects = () => {
  return (
    <ProjectsContainer id="projects" area-label="Projects">
      <List>
        {projectList.map(project => (
          <ProjectItem key={project.id} project={project}></ProjectItem>
        ))}
      </List>
    </ProjectsContainer>
  );
};
