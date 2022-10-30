import React from 'react';
import Image from 'next/image';
// import PropTypes from 'prop-types';

import { useRouter } from 'next/router';
import { menuItems } from './menuItems';

const DesktopNavbar = () => {
  // const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  // const account = useSelector((state) => state.account);

  // function toggle() {
  //   setShowMe((prev) => !prev);
  // }

  const router = useRouter();

  return (
    <nav
      className="flex flex-row gap-[16px] items-center font-roboto"
      style={{ gap: '16px' }}
    >
      <ul className="flex items-center gap-4 ml-auto list-none">
        {menuItems.map((menu, index) => (
          <li className="list-none border-0 menu-items" key={index}>
            <a href={menu.url}>
              <Image
                src={
                  router.pathname.includes(menu.url)
                    ? menu.active
                    : menu.inactive
                }
              />
            </a>
          </li>
        ))}
      </ul>
      {/* <button
        onClick={toggle}
        className="w-[35px] h-[35px] bg-profile rounded-full text-center border-0 cursor-pointer"
      >
        <span className=" text-[15px] tracking-[0.02em] font-bold text-white align-middle">
          {isLoggedIn && account.user.name.substring(0, 1)}
        </span>
      </button> */}
    </nav>
  );
};

export default DesktopNavbar;

// DesktopNavbar.propTypes = {
//   setShowMe: PropTypes.func.isRequired,
// };
