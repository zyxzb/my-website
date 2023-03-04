import { Link } from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import { generateRandomHeight } from 'utils/projects-utils';
import { Loader } from 'components';

const ProjectsGallery = () => {
  const [{ projects, error, loading }] = useFetch();

  if (loading) {
    return (
      <div className='w-full h-[300px] flex justify-center items-center flex-col'>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-full h-[300px] flex justify-center items-center flex-col'>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className='w-full max-w-[100%] sm:columns-2 2xl:columns-3 mx-auto'>
      {projects.map(({ id, name, githubUrl, pageUrl, imageUrl, tech }) => (
        <div
          className='inline-block mb-2 last-of-type:mb-0 w-full rounded-md overflow-hidden relative group'
          key={id}
        >
          {/* Top */}
          <div className='absolute top-0 left-0 right-0 p-2 flex justify-between bg-slate-500 z-10'>
            <div className='w-[65%]'>{name}</div>
            <div className='gap-2 flex'>
              {githubUrl ? (
                <Link
                  to={githubUrl}
                  className='hover:font-bold'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {`</>`}
                </Link>
              ) : null}
              {pageUrl ? (
                <Link
                  to={pageUrl}
                  className='hover:font-bold'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Url
                </Link>
              ) : null}
            </div>
          </div>
          {/* Img section */}
          <div className='relative'>
            <img
              src={imageUrl.url}
              alt={`${name} card background`}
              className={`w-full ${generateRandomHeight()} object-cover`}
            />
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/20 group-hover:bg-transparent transition-all'></div>
          </div>
          {/* Tech  */}
          <div
            className={`max-h-max w-full bg-slate-500/70 p-2 text-sm ${
              !tech.value.document.children ? 'hidden ' : ''
            }`}
          >
            <ul className='flex text-center flex-wrap gap-2'>
              {tech.value.document.children
                ? tech.value.document.children.map((el, index) => (
                    <li
                      className='max-h-max p-2 border rounded-2xl hover:font-bold cursor-pointer'
                      key={index}
                    >
                      {el.children.map((el, index) => (
                        <span key={index}>{el.value}</span>
                      ))}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGallery;
