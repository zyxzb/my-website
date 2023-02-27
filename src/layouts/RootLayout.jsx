import { Header, Nav } from 'components';
import { Outlet } from 'react-router-dom';
const RootLayout = () => {
  return (
    <>
      <Header />
      <div className='relative flex w-full max-w-screen-2xl mx-auto bg-bgDarkBlue tracking-wide'>
        <Nav />
        <main className='bg-bgDarkBlue h-screen transition-all duration-300 overflow-auto px-3 md:px-6 pt-24 text-textLightBlue w-full'>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
