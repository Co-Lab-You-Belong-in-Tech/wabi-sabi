import InActiveCompas from '../../public/assets/Compass.svg';
import ActiveCompas from '../../public/assets/CompassColored.svg';

const navItems = [
  {
    inactive: '/assets/inactive-memories-icon.svg',
    active: '/assets/active-memories-icon.svg',
    url: '/memories',
  },
  {
    inactive: '/assets/inactive-home-icon.svg',
    active: '/assets/active-home-icon.svg',
    url: '/home',
  },
  {
    inactive: InActiveCompas,
    active: ActiveCompas,

    url: '/discover',
  },
];

export default navItems;
