import { Link } from 'react-router-dom';
import { ToggleBtn } from 'components';

const Header = () => {
  return (
    <header className='flex h-14 justify-between px-6 border-b-[1px] w-full max-w-screen-2xl mx-auto items-center fixed z-10 left-1/2 -translate-x-1/2 backdrop-blur-[5px] bg-opacity-40 '>
      <Link
        to='/'
        className='text-2xl my-auto font-bold text-textLightBlue tracking-wide'
      >{`</b> Zarzycki`}</Link>
      <ToggleBtn />
    </header>
  );
};

export default Header;
