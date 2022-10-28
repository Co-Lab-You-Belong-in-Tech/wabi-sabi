import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../actions/account';
import MobileNavbar from './MobileNavbar';

export default function Footer() {
  // const [showMe, setShowMe] = useState(false);
  // const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  // const account = useSelector((state) => state.account);
  // const dispatch = useDispatch();
  // const handleLogout = () => {
  //   dispatch(logout());
  // };
  return (
    <div className="fixed bottom-0 left-0 z-20 w-full">
      <div className="bg-white px-5 sm:hidden drop-shadow-3xl w-full relative z-10  p-[10px]">
        <div className="relative w-full mx-auto max-w-7xl">
          <div className="relative z-10 flex-row justify-between sm:flex ">
            <MobileNavbar />
          </div>
        </div>
      </div>
    </div>
  );
}
