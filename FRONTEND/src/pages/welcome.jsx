import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import AppLayout from '../components/Layouts/AppLayout';

function welcome() {
  const { push } = useRouter();
//   useEffect(() => {
//     const timer = setTimeout(() => push('/home'), 15000);
//     return () => clearTimeout(timer);
//   }, []);
  const { isLoggedIn, register_success } = useSelector(
    (state) => state.account,
  );
  const account = useSelector((state) => state.account);
  // console.log(account.user.name);

  return (
    <AppLayout renderSide={false}>
      <main className="relative flex flex-col flex-grow items-center mt-28 px-9 pb-10 overflow-hidden">
        <div className="bg-ellipse -z-10 w-[140vw] h-[80vh] left-1/2 -translate-x-1/2 top-full -translate-y-full md:-translate-y-[18%] " />
        <header className="flex items-center justify-center mb-24 md:mb-16">
          <img src="/assets/auth-page-logo.svg" alt="Logo" />
          <h2 className="font-bold text-[2.25rem]">
            Hi
            {' '}
            {(isLoggedIn || register_success) &&
              account?.name?.split(' ')[0]}
            {' '}
            !
          </h2>
        </header>
        <section className="mb-[18px]">
          <div className="flex gap-6 items-center">
            <h1 className="text-primary font-bold text-[2.5rem] sm:text-[2.8125rem]">
              1
            </h1>
            <p className="sm:text-[1.5rem] text-2xl tracking-wide">
              Start by selecting a question card
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <h1 className="text-primary font-bold text-[2.5rem] sm:text-[2.8125rem]">
              2
            </h1>
            <p className="sm:text-[1.5rem] text-2xl tracking-wide">
              Add a photo and tell your stories
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <h1 className="text-primary font-bold text-[2.5rem] sm:text-[2.8125rem]">
              3
            </h1>
            <p className="sm:text-[1.5rem] text-2xl tracking-wide">
              Share your memory with others
            </p>
          </div>
        </section>
        <section className="flex gap-4 mb-[51px]">
          <img src="/assets/WelcomeCard.svg" alt="question card" />
          <img src="/assets/Arrow.svg" alt="arrow" />
          <img src="/assets/Welcomephoto.svg" alt="" />
          <img src="/assets/Arrow.svg" alt="arrow" />
          <img src="/assets/User_Groups.svg" alt="user groups" />
        </section>
        <p className="sm:text-[1.5rem] text-2xl  tracking-wide mb-10 md:mb-3 text-center mx-auto max-w-[218px] md:max-w-none">
          Now you’re ready to start creating new memories!
        </p>
        <div className="w-full flex justify-end md:justify-center">
          <a
            href="/home"
            className="underline flex text-[#373737] text-sm tracking-wide sm:text-center items-center "
          >
            <img src="/assets/Tablet_Tap.svg" alt="" />
            <span>Touch to skip</span>
          </a>
        </div>
      </main>
    </AppLayout>
  );
}

export default welcome;
