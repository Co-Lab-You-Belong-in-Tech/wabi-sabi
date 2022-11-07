import React from 'react';
import DesktopHeader from '../desktopHeader';

function GuestLayout({ children }) {
  return (
    <>
      <DesktopHeader />
      {children}
    </>
  );
}

export default GuestLayout;
