import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import DesktopNavbar from './DesktopNavbar';
import Profile from './Profile';

export default function DesktopHeader({ renderSide }) {
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  return (
    <header className="md:flex items-center justify-between w-full bg-white h-[72px] px-36 drop-shadow-3xl sticky top-0 hidden z-20">
      <Image src="/assets/Logo.svg" alt="Logo" width={144} height={63} />
      {renderSide &&
        (isLoggedIn ? (
          <div className="flex ">
            <DesktopNavbar />
            <Profile />
          </div>
        ) : (
          <nav className="flex items-center gap-x-2">
            <Link href="/account/register">
              <p className="text-xl font-bold px-3 py-[10px] cursor-pointer">
                Sign up
              </p>
            </Link>
            <Link href="/account/login">
              <p className="text-xl font-bold px-3 py-[10px] cursor-pointer">
                Log in
              </p>
            </Link>
          </nav>
        ))}
    </header>
  );
}

DesktopHeader.propTypes = {
  renderSide: PropTypes.bool.isRequired,
};
