import React from 'react';
import Link from 'next/link';
import DesktopHeader from './DesktopHeader';

function DesktopOnboardingPage() {
  return (
    <>
      <DesktopHeader>
        <nav className="flex items-center gap-x-2">
          <Link href="/account/register">
            <p className='text-xl font-bold px-3 py-[10px] cursor-pointer'>Sign up</p>
          </Link>
          <Link href="/account/login">
            <p className='text-xl font-bold px-3 py-[10px] cursor-pointer'>Log in</p>
          </Link>
        </nav>
      </DesktopHeader>
    </>
  );
}

export default DesktopOnboardingPage;
