import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { navItems } from './menuItems';

const MobileNavbar = () => {
  const router = useRouter();

  return (
    <nav className="flex flex-row gap-[16px] items-center font-roboto relative ">
      <ul className="flex gap-5 items-center flex-grow justify-between px-4 sm:px-12">
        {navItems.map((menu, index) => (
          <li className="menu-items border-0 list-none" key={index}>
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
