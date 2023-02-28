import { TitleAnimation } from 'components';
import { Link } from 'react-router-dom';

const HomePage = ({ title }) => {
  return (
    <>
      <small>{title}</small>
      <div className='max-w-[800px] mx-auto text-center'>
        <span className='text-bold sm:text-xl my-10'>Hey there! 👋</span>
        <TitleAnimation />
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
        <Link to='/projects' className='bg-textDarkBlue p-4 mb-14'>
          My Projects
        </Link>
        <p className='mt-14 mb-10 sm:text-xl'>or leave me a message</p>
        <Link to='/contact' className='bg-textDarkBlue p-4'>
          Contact
        </Link>
      </div>
    </>
  );
};

export default HomePage;
