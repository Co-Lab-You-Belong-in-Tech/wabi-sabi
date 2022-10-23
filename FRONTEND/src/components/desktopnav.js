/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { menuItems } from './menuItems';

const DesktopNavbar = ({ setShowMe }) => {
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  const account = useSelector((state) => state.account);

  function toggle() {
    setShowMe((prev) => !prev);
  }

  const router = useRouter();

  return (
    <nav
      className="flex flex-row gap-[16px] items-center font-roboto"
      style={{ gap: '16px' }}
    >
      <ul className="ml-auto flex gap-4 list-none items-center">
        {menuItems.map((menu, index) => (
          <li className="menu-items border-0 list-none" key={index}>
            <a href={menu.url}>
              <Image
                src={router.pathname === menu.url ? menu.active : menu.inactive}
              />
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={toggle}
        className="w-[35px] h-[35px] bg-profile rounded-full text-center border-0 cursor-pointer"
      >
        <span className=" text-[15px] tracking-[0.02em] font-bold text-white align-middle">
          {isLoggedIn && account.user.name.substring(0, 1)}
        </span>
      </button>
      {/* <span
        className="absolute bottom-[-10px] right-[25px] hidden w-0 h-0 duration-700 transition-max border-x-[13px] border-solid border-x-[transparent] border-b-[transparent] border-t-[17px] border-t-green-200"
        style={{ display: showMe ? 'block' : 'none' }}
      /> */}
    </nav>
  );
};

export default DesktopNavbar;
