import InActiveCompas from '../../public/assets/Compass.svg';
import ActiveCompas from '../../public/assets/CompassColored.svg';

export const menuItems = [
  {
    inactive: '/assets/inactive-home-icon.svg',
    active: '/assets/active-home-icon.svg',
    // title: <VscHome style={{ width: '30', height: '30', color: '#666' }} />,
    url: '/home',
  },
  {
    inactive: '/assets/inactive-memories-icon.svg',
    active: '/assets/active-memories-icon.svg',
    // title: <BsGrid style={{ width: '30', height: '30', color: '#666' }} />,
    url: '/memories',
  },
  {
    inactive: InActiveCompas,
    active: ActiveCompas,

    url: '/discover',
  },
];

export const navItems = [
  {
    inactive: '/assets/inactive-memories-icon.svg',
    active: '/assets/active-memories-icon.svg',
    // title: <BsGrid style={{ width: '30', height: '30', color: '#666' }} />,
    url: '/memories',
  },
  {
    inactive: '/assets/inactive-home-icon.svg',
    active: '/assets/active-home-icon.svg',
    // title: <VscHome style={{ width: '30', height: '30', color: '#666' }} />,
    url: '/home',
  },
  {
    inactive: InActiveCompas,
    active: ActiveCompas,

    url: '/discover',
  },
];
