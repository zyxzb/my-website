import { ProjectsGallery } from 'components';

const ProjectsPage = ({ title }) => {
  return (
    <>
      <small>{title}</small>
      <ProjectsGallery />
    </>
  );
};

export default ProjectsPage;
