import { Header, Nav } from 'components';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const RootLayout = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <div className='relative flex w-full max-w-screen-2xl mx-auto bg-bgDarkBlue tracking-wide'>
        <Nav />
        <main
          className='bg-bgDarkBlue h-screen transition-all duration-300 overflow-auto px-3 md:px-6 pt-24 text-textLightBlue w-full'
          key={location.pathname}
          location={location}
        >
          <AnimatePresence>
            <motion.div
              key={location.pathname}
              location={location}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </>
  );
};

export default RootLayout;
