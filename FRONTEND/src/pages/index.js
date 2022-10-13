import React from 'react';

import { useRouter } from 'next/router';

const Home = () => {
  const { push } = useRouter();

  return (
    <>
      <nav className="hidden sm:flex justify-around drop-shadow-3xl font-roboto  align-text-bottom p-[15px]">
        <div>
          <h1 className="text-gray-300">WABI-SABI</h1>
        </div>
        <div className="text-xl flex flex-row gap-2 ">
          <a
            href="/account/register"
            className="no-underline text-gray-700 font-bold"
          >
            Sign up
          </a>
          <a
            href="/account/login"
            className="no-underline text-gray-700 font-bold"
          >
            Log In
          </a>
        </div>
      </nav>
      <main className="relative isolate flex flex-col justify-between items-center bg-gray-100 w-full h-screen overflow-hidden text-base text-white font-roboto">
        <h1 className="text-4xl tracking-[0.02em] grid place-items-center w-full h-1/2 font-black font-inherit text-gray-300  text-center">
          WABI-SABI
        </h1>
        <div className="relative w-full flex flex-col flex-grow items-center">
          <div className="absolute -z-10 bg-gray-600 rounded-[50%] bottom-0 translate-y-1/4 left-1/2 -translate-x-1/2 w-[180%] lg:w-[120%] h-[150%]" />
          <section className="relative text-gray-100 w-[263px] lg:self-start lg:ml-[20%] lg:mt-[2%] flex-grow-0 flex flex-col gap-5">
            <article className="flex gap-5 items-center">
              <img
                className="w-[68px] h-[64px]"
                alt="Landscape"
                src="/assets/Group 79.svg"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-2xl">Relive Memories</h3>
                <p className="text-base">
                  Walk down memory lane and create a habit of creating new
                  memories
                </p>
              </div>
            </article>
            <article className="flex gap-5 items-center">
              <img
                className="w-[68px] h-[64px]"
                alt="Camera"
                src="/assets/Group 78.svg"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-2xl">Storytelling</h3>
                <p className="text-base">
                  Share your authentic stories to real memories that matter the
                  most
                </p>
              </div>
            </article>
            <article className="flex gap-5 items-center">
              <img
                className="w-[68px] h-[64px]"
                alt="Handshake Heart"
                src="/assets/Group 77.svg"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-2xl">Discover Memories</h3>
                <p className="text-base">
                  View and be inspired by the stories of other people
                </p>
              </div>
            </article>

            <div className="flex flex-col gap-2.5 items-center w-full">
              <button
                onClick={() => push('/account/register')}
                className="cursor-pointer inline-block mt-10 border-0 text-white p-2.5 rounded-[15px] bg-gray-200 w-full"
              >
                Get Started
              </button>

              <a
                href="account/login"
                className="text-lg tracking-[0.02em] text-[inherit] inline-block text-center text-white"
              >
                Sign in to existing account
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
