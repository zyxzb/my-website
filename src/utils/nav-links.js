import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai';
import { MdWorkOutline, MdPersonOutline } from 'react-icons/md';
export const navLinks = [
  {
    id: 1,
    name: 'home',
    url: '/',
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    name: 'projects',
    url: '/projects',
    icon: <MdWorkOutline />,
  },
  {
    id: 3,
    name: 'contact',
    url: '/contact',
    icon: <AiOutlineMessage />,
  },
  {
    id: 4,
    name: 'about',
    url: '/about',
    icon: <MdPersonOutline />,
  },
];
