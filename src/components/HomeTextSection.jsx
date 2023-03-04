import { useGlobalContext } from 'context/globalContext';
import { Link } from 'react-router-dom';

const HomeTextSection = () => {
  const { showContact } = useGlobalContext();

  return (
    <>
      <p className='my-8 sm:text-xl'>
        I have experience in telecommunications and e-commerce, but I realized
        that I am more interested in writing code. In addition to coding, I
        enjoy photography, keeping up with new technologies, biking, and
        listening to electronic music. If you're looking for a reliable and
        enthusiastic Frontend/React developer to work with, let's team up and
        create something amazing.
      </p>
      <p className='mt-14 mb-10 sm:text-xl'>
        Check out some of my recent projects
      </p>
      <Link
        to='/projects'
        className='bg-textDarkBlue p-4 mb-14 hover:bg-textLightBlue hover:text-bgDarkBlue transition'
      >
        My Projects
      </Link>
      <div
        className={
          showContact
            ? 'visible opacity-100 transition duration-1000'
            : 'collapse opacity-0 transition duration-1000'
        }
      >
        <p className='mt-14 mb-10 sm:text-xl '>Leave me a message</p>
        <Link
          to='/contact'
          className='bg-textDarkBlue p-4 hover:bg-textLightBlue hover:text-bgDarkBlue transition'
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default HomeTextSection;
