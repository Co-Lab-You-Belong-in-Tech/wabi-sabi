/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
// /* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/account';

import DesktopNavbar from '../desktopnav';
import MobileNavbar from '../mobilenav';

function AppLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default AppLayout;

function Header() {
  const [showMe, setShowMe] = useState(false);
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="z-20 relative">
      <div className="hidden sm:block bg-white px-5 drop-shadow-3xl w-full relative z-10  p-[10px]">
        <div className="w-full max-w-7xl mx-auto relative">
          <div className="hidden relative z-10 sm:flex flex-row justify-between  font-roboto ">
            <a href="/" className="logo">
              <img src="/assets/Logo.svg" alt="Logo" height={63} width={144} />
            </a>
            <DesktopNavbar setShowMe={setShowMe} />
          </div>
        </div>
      </div>
      <div>
        <div className="sm:hidden flex justify-end py-4 px-5 w-full max-w-7xl mx-auto relative z-10">
          <button
            onClick={() => setShowMe((prev) => !prev)}
            className="relative w-[35px] h-[35px] bg-profile rounded-full text-center border-0 cursor-pointer"
          >
            <span className=" text-[15px] tracking-[0.02em] -translate-x-1/2 font-bold text-white align-middle">
              {isLoggedIn && account.user.name.substring(0, 1)}
            </span>
            <span
              className="absolute top-[110%] left-1/2 -translate-x-1/2 w-0 h-0 duration-700 border-solid border-[13px] border-black/0 border-t-green-200"
              style={{ display: showMe ? 'block' : 'none' }}
            />
          </button>
          {/* i dey come oo, i dey test */}
          {/* tailwind sets border style to solid by deault. why this one be like this, lmao I don't know  */}
          {/* i said the span should be in the button na, when I put it there it wasn't showing */}
        </div>
        {/* lets use top, margin-top will cause layout shift  */}
        <div className="px-5">
          <div className="w-full max-w-7xl mx-auto relative">
            <div
              className=" bg-white shadow-3xl rounded-4xl w-max max-h-0 duration-500 overflow-hidden transition-max absolute top-3 right-0 text-2xl text-black"
              style={{
                maxHeight: showMe ? '400px' : '0px',
              }}
            >
              <div className="flex gap-[14px] pb-4 p-5  items-center ">
                <button className="w-[27px] h-[27px] bg-profile rounded-full text-center border-0 cursor-pointer">
                  <h2 className=" text-[15px] tracking-[0.02em] font-bold text-white align-middle">
                    {isLoggedIn && account.user.name.substring(0, 1)}
                  </h2>
                </button>
                <p>{isLoggedIn && account.user.name}</p>
              </div>
              {/* <hr className="h-full p-0 bg-[#CECECE] mb-[18px]" /> */}
              <div className="border-b-[#CECECE] border-b-[0.5px] border-solid border-l-0 border-r-0 border-t-0  mb-[18px]" />
              <div className=" pl-5 pb-4">
                <a
                  onClick={handleLogout}
                  className="font-bold text-black text-2xl mb-[15px] no-underline  cursor-pointer"
                >
                  Sign Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>Sign in , signuo</div>
    </div>
  );
}
function Footer() {
  const [showMe, setShowMe] = useState(false);
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="fixed bottom-0 w-full left-0 z-20">
      <div className="bg-white px-5 sm:hidden drop-shadow-3xl w-full relative z-10  p-[10px]">
        <div className="w-full max-w-7xl mx-auto relative">
          <div className=" relative z-10 sm:flex flex-row justify-between  font-roboto ">
            <MobileNavbar setShowMe={setShowMe} />
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto relative">
        <div
          className=" bg-white shadow-3xl rounded-4xl w-max max-h-0 duration-500 overflow-hidden transition-max absolute top-full right-0 text-2xl text-black"
          style={{
            maxHeight: showMe ? '400px' : '0px',
          }}
        >
          <div className="flex gap-[14px] pb-4 p-5 items-center ">
            <button className="w-[27px] h-[27px] bg-profile rounded-full text-center border-0 cursor-pointer">
              <h2 className=" text-[15px] tracking-[0.02em] font-bold text-white align-middle">
                {isLoggedIn && account.user.name.substring(0, 1)}
              </h2>
            </button>
            <p>{isLoggedIn && account.user.name}</p>
          </div>
          <hr className="h-full p-0 bg-[#CECECE] mb-[18px]" />
          <div className="border-b-[#CECECE] border-b-[0.5px] border-solid border-l-0 border-r-0 border-t-0  mb-[18px]" />
          <div className=" pl-5 pb-4">
            <a
              onClick={handleLogout}
              className="font-bold text-black text-2xl mb-[15px] no-underline "
            >
              Sign Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
