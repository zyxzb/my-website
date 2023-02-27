import { useGlobalContext } from 'context/globalContext';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from 'utils/nav-links';
import { socialLinks } from 'utils/social-links';
import { MdMail } from 'react-icons/md';

const Nav = () => {
  const { navOpen } = useGlobalContext();
  const navBase =
    'absolute bg-bgDarkBlue min-h-[calc(100vh-56px)] bottom-0 min-w-[240px] flex flex-col justify-between border-r-[1px] md:-translate-x-[0] transition-all md:relative md:mt-14';

  return (
    <nav
      className={
        navOpen
          ? `${navBase} -translate-x-[0]`
          : `${navBase} -translate-x-[240px] `
      }
    >
      <div className='text-textLightBlue'>
        <ul className='flex flex-col p-6'>
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <NavLink
                  to={link.url}
                  className={({ isActive }) => {
                    const base = 'py-4 capitalize w-full flex items-center';
                    return isActive
                      ? `${base} font-bold text-textLightBlue`
                      : `${base} hover:text-textDarkBlue transition duration-300`;
                  }}
                >
                  <div className='pr-3'>{link.icon}</div>
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className='border-b-[1px] w-[80%] mx-auto' />
      </div>
      <ul className='flex flex-col p-6'>
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link
                to={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className='py-4 capitalize flex items-center text-textLightBlue hover:text-textDarkBlue transition duration-300'
              >
                <div className='pr-3'>{link.icon}</div>
                {link.name}
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            to='/contact'
            className='py-4 capitalize flex items-center text-textLightBlue hover:text-textDarkBlue transition duration-300'
          >
            <div className='pr-3'>
              <MdMail />
            </div>
            Mail
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
