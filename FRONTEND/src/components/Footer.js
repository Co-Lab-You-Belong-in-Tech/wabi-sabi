import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/account';
import MobileNavbar from './MobileNavbar';

export default function Footer() {
  const [showMe, setShowMe] = useState(false);
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="fixed bottom-0 left-0 z-20 w-full">
      <div className="bg-white px-5 sm:hidden drop-shadow-3xl w-full relative z-10  p-[10px]">
        <div className="relative w-full mx-auto max-w-7xl">
          <div className="relative z-10 flex-row justify-between sm:flex font-roboto">
            <MobileNavbar setShowMe={setShowMe} />
          </div>
        </div>
      </div>
      <div className="relative w-full mx-auto max-w-7xl">
        <div
          className="absolute right-0 overflow-hidden text-2xl text-black duration-500 bg-white shadow-3xl rounded-4xl w-max max-h-0 transition-max top-full"
          style={{
            maxHeight: showMe ? '400px' : '0px',
          }}
        >
          <div className="flex gap-[14px] pb-4 p-5 items-center ">
            <button
              type="button"
              className="w-[27px] h-[27px] bg-profile rounded-full text-center border-0 cursor-pointer"
            >
              <h2 className=" text-[15px] tracking-[0.02em] font-bold text-white align-middle">
                {isLoggedIn && account.user.name.substring(0, 1)}
              </h2>
            </button>
            <p>{isLoggedIn && account.user.name}</p>
          </div>
          <hr className="h-full p-0 bg-[#CECECE] mb-[18px]" />
          <div className="border-b-[#CECECE] border-b-[0.5px] border-solid border-l-0 border-r-0 border-t-0  mb-[18px]" />
          <div className="pb-4 pl-5 ">
            <button
              type="button"
              onClick={handleLogout}
              className="font-bold text-black text-2xl mb-[15px] no-underline "
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
