// import { VscHome, VscCompass } from 'react-icons/vsc';
// import { BsGrid } from 'react-icons/bs';
import InActiveHome from '../../public/assets/Home.svg';
import ActiveHome from '../../public/assets/HomeActive.svg';
import InActiveMemory from '../../public/assets/Memory Journal.svg';
import ActiveMemory from '../../public/assets/Health Data.svg';
import InActiveCompas from '../../public/assets/Compass.svg';
import ActiveCompas from '../../public/assets/CompassColored.svg';
// you need to rename these files o, would do

export const menuItems = [
  {
    inactive: InActiveHome,
    active: ActiveHome,
    // title: <VscHome style={{ width: '30', height: '30', color: '#666' }} />,
    url: '/home',
  },
  {
    inactive: InActiveMemory,
    active: ActiveMemory,
    // title: <BsGrid style={{ width: '30', height: '30', color: '#666' }} />,
    url: '/memories',
  },
  {
    inactive: InActiveCompas,
    active: ActiveCompas,
    // title: <VscCompass style={{ width: '30', height: '30', color: '#666' }} />,
    url: '/discover',
  },
];

export const navItems = [
  {
    inactive: InActiveMemory,
    active: ActiveMemory,
    // title: <BsGrid style={{ width: '30', height: '30', color: '#666' }} />,
    url: '/memories',
  },
  {
    inactive: InActiveHome,
    active: ActiveHome,
    // title: <VscHome style={{ width: '30', height: '30', color: '#666' }} />,
    url: '/home',
  },
  {
    inactive: InActiveCompas,
    active: ActiveCompas,
    // title: <VscCompass style={{ width: '30', height: '30', color: '#666' }} />,
    url: '/discover',
  },
];
