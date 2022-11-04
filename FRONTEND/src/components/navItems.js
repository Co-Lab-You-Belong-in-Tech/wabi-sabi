const navItems = [
  {
    inactive: '/assets/inactive-memories-icon.svg',
    active: '/assets/active-memories-icon.svg',
    url: '/memories',
    activeUrls: ['/memories', '/memory/[id]'],
  },
  {
    inactive: '/assets/inactive-home-icon.svg',
    active: '/assets/active-home-icon.svg',
    url: '/home',
    activeUrls: ['/home', '/memory/new'],
  },
  {
    inactive: '/assets/inactive-public.svg',
    active: '/assets/active-public.svg',
    url: '/discover',
    activeUrls: ['/discover'],
  },
];

export default navItems;
