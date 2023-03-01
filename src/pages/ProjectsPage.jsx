import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from 'utils/projects-list';

const ProjectsPage = ({ title }) => {
  return (
    <>
      <small>{title}</small>
      <div className='w-full max-w-[100%] sm:columns-2 lg:columns-3 xl:columns-4 mx-auto'>
        {projects.map((project) => (
          <div class='inline-block mb-2 w-full rounded-md overflow-hidden relative'>
            <div className='absolute top-2 left-2 right-2 flex justify-between'>
              <div className='w-[65%]'>{project.name}</div>
              <div className='gap-2 flex'>
                <Link to='/'>Git</Link>
                <Link to='/'>Url</Link>
              </div>
            </div>
            <img src={project.imgUrl} alt='' className='w-full h-auto' />
            <div className='max-h-max w-full bg-slate-400'>
              <ul className='flex text-center flex-wrap'>
                <li className='w-1/4 p-2'>sample 1</li>
                <li className='w-1/4 p-2'>sample 2</li>
                <li className='w-1/4 p-2'>sample 3</li>
                <li className='w-1/4 p-2'>sample 4</li>
                <li className='w-1/4 p-2'>sample 4</li>
                <li className='w-1/4 p-2'>sample 4</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
