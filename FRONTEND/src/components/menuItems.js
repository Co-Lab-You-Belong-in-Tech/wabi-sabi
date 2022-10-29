import InActiveHome from '../../public/assets/Home.svg';
import ActiveHome from '../../public/assets/HomeActive.svg';
import InActiveMemory from '../../public/assets/Memory Journal.svg';
import ActiveMemory from '../../public/assets/Health Data.svg';
import InActiveCompas from '../../public/assets/Compass.svg';
import ActiveCompas from '../../public/assets/CompassColored.svg';

export const menuItems = [
  {
    inactive: InActiveHome,
    active: ActiveHome,

    url: '/home',
  },
  {
    inactive: InActiveMemory,
    active: ActiveMemory,

    url: '/memory',
  },
  {
    inactive: InActiveCompas,
    active: ActiveCompas,

    url: '/discover',
  },
];

export const navItems = [
  {
    inactive: InActiveMemory,
    active: ActiveMemory,

    url: '/memory',
  },
  {
    inactive: InActiveHome,
    active: ActiveHome,

    url: '/home',
  },
  {
    inactive: InActiveCompas,
    active: ActiveCompas,

    url: '/discover',
  },
];
