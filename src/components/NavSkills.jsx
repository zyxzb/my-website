import { iconsSkills } from 'utils/icons-skills';

const NavSkills = () => {
  return (
    <div className='smallHeight:hidden'>
      <ul
        className='p-6 text-textLightBlue flex flex-wrap icons text-2xl gap-3'
        aria-label='Skills list'
      >
        {iconsSkills.map((icon) => (
          <li
            key={icon.id}
            className='hover:text-textDarkBlue transition cursor-pointer'
            title={icon.title}
          >
            {icon.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavSkills;
