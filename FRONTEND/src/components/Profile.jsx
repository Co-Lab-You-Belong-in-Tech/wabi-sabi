import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { logoutAccount } from '../redux/features/account/accountSlice';

export default function Profile() {
  const [showMe, setShowMe] = useState(false);
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const router = useRouter();
  
  const handleLogout = () => {
    dispatch(logoutAccount());
  };
  
  if (!isLoggedIn) {
    router.push('/account/login');
  }

  return (
    <>
      <div className="relative z-10 w-max">
        <button
          type="button"
          onClick={() => setShowMe((prev) => !prev)}
          className="relative w-[35px] h-[35px] bg-profile rounded-full text-center border-0 cursor-pointer"
        >
          <span className=" text-[15px] tracking-[0.02em] -translate-x-1/2 font-bold text-white align-middle uppercase">
            {isLoggedIn && account.name[0]}
          </span>
          <span
            className="absolute top-[110%] left-1/2 -translate-x-1/2 w-0 h-0 duration-700 border-solid border-[13px] border-black/0 border-t-green-500"
            style={{ display: showMe ? 'block' : 'none' }}
          />
        </button>
      </div>
      <div className={`z-50 px-5 right-0 absolute top-16 ${showMe ? 'h-[150px]' : 'h-0'}`}>
        <div className="md:w-[270px] w-[144px]">
          <div
            className="w-full overflow-hidden text-2xl text-black duration-500 ease-in-out bg-white shadow-3xl rounded-4xl max-h-0 transition-max"
            style={{
              maxHeight: showMe ? '400px' : '0px',
            }}
          >
            <div className="flex gap-[14px] pb-4 p-5 items-center">
              <button
                type="button"
                className="w-[27px] h-[27px] bg-profile rounded-full text-center border-0 cursor-pointer"
              >
                <h2 className=" text-[15px] tracking-[0.02em] font-bold text-white align-middle uppercase">
                  {isLoggedIn && account.name[0]}
                </h2>
              </button>
              <p className="text-2xl font-bold capitalize">{isLoggedIn && account.name.split(' ')[0]}</p>
            </div>
            <div className="border-b-[#CECECE] border-b-[0.5px] border-solid border-l-0 border-r-0 border-t-0  mb-[18px]" />
            <div className="flex">
              <button
                type="button"
                onClick={handleLogout}
                className="w-full h-full pb-5 pl-4 text-2xl font-bold text-left text-black cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
