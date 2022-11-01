import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import navItems from './navItems';

const MobileNavbar = () => {
  const router = useRouter();

  return (
    <nav className="flex flex-row gap-[16px] items-center">
      <ul className="flex items-center justify-between flex-grow gap-5 px-4 sm:px-12">
        {navItems.map((menu) => (
          <li className="menu-items" key={menu.url}>
            <a href={menu.url}>
              <Image
                height={28}
                width={28}
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
