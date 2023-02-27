import React from 'react';
import { useGlobalContext } from 'context/globalContext';

const ToggleBtn = () => {
  const { navOpen, setNavOpen } = useGlobalContext();

  return (
    <button
      className={
        navOpen
          ? 'visible md:invisible relative group active'
          : 'visible md:invisible relative group'
      }
      onClick={() => setNavOpen((prevState) => !prevState)}
    >
      <div className='flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden'>
        <div
          className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-[.active]:translate-x-10`}
        ></div>
        <div className='bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-[.active]:translate-x-10 delay-75'></div>
        <div className='bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-[.active]:translate-x-10 delay-150'></div>

        <div className='absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-[.active]:translate-x-0 flex w-0 group-[.active]:w-12'>
          <div className='absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-[.active]:rotate-45'></div>
          <div className='absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-[.active]:-rotate-45'></div>
        </div>
      </div>
    </button>
  );
};

export default ToggleBtn;
