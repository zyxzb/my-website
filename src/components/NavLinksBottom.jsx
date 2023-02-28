import { socialLinks } from 'utils/social-links';
import { Link } from 'react-router-dom';
import { MdMail } from 'react-icons/md';

const NavLinksBottom = () => {
  return (
    <div>
      <ul className='flex flex-col p-6 xSmallHeight:flex-row xSmallHeight:justify-between'>
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link
                to={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className='py-4 capitalize flex items-center text-textLightBlue hover:text-textDarkBlue transition duration-300 xSmallHeight:py-0'
              >
                <div className='pr-3 xSmallHeight:pr-1'>{link.icon}</div>
                {link.name}
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            to='/contact'
            className='py-4 capitalize flex items-center text-textLightBlue hover:text-textDarkBlue transition duration-300 xSmallHeight:py-0'
          >
            <div className='pr-3 xSmallHeight:pr-1'>
              <MdMail />
            </div>
            Mail
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinksBottom;
