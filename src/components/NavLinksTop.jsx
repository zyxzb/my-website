import { navLinks } from 'utils/nav-links';
import { NavLink } from 'react-router-dom';

const NavLinksTop = () => {
  return (
    <div className='text-textLightBlue'>
      <ul className='flex flex-col p-6'>
        {navLinks.map((link) => {
          return (
            <li key={link.id}>
              <NavLink
                to={link.url}
                className={({ isActive }) => {
                  const base =
                    'py-4 capitalize w-full flex items-center xSmallHeight:py-2';
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
    </div>
  );
};

export default NavLinksTop;
