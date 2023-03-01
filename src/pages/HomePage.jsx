import { HomeTextSection, TitleAnimation } from 'components';

const HomePage = ({ title }) => {
  return (
    <>
      <small>{title}</small>
      <div className='max-w-[800px] mx-auto text-center'>
        <span className='text-bold sm:text-xl my-10'>Hey there! 👋</span>
        <TitleAnimation />
        <HomeTextSection />
      </div>
    </>
  );
};

export default HomePage;
