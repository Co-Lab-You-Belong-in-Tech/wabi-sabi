import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { navItems } from './menuItems';

const MobileNavbar = () => {
  const router = useRouter();

  return (
    <nav className="flex flex-row gap-[16px] items-center font-roboto relative ">
      <ul className="flex items-center justify-between flex-grow gap-5 px-4 sm:px-12">
        {navItems.map((menu, index) => (
          <li className="list-none border-0 menu-items" key={index}>
            <a href={menu.url}>
              <Image
                src={router.pathname === menu.url ? menu.active : menu.inactive}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavbar;
