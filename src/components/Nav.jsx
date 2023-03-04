import { useGlobalContext } from 'context/globalContext';
import { NavLinksBottom, NavLinksTop, NavSkills } from 'components';

const Nav = () => {
  const { navOpen } = useGlobalContext();
  const navBase =
    'fixed bg-bgDarkBlue h-[calc(100dvh-56px)] bottom-0 w-[240px] min-w-[240px] flex flex-col justify-between border-r-[1px] md:-translate-x-[0] transition-all md:relative md:mt-14 smallHeight:text-xs overflow-auto z-30';

  return (
    <nav
      className={
        navOpen
          ? `${navBase} -translate-x-[0]`
          : `${navBase} -translate-x-[240px] `
      }
    >
      <NavLinksTop />
      <div className='border-b-[1px] w-[80%] mx-auto opacity-50' />
      <NavSkills />
      <div className='border-b-[1px] w-[80%] mx-auto smallHeight:hidden opacity-50' />
      <NavLinksBottom />
    </nav>
  );
};

export default Nav;
