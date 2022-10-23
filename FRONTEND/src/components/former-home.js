import React from 'react';
import Link from 'next/link';

function Home() {

  return (
    <>
      <nav className="navigation hidden sm:flex justify-between pl-[153px] pr-[156px] drop-shadow-3xl font-roboto  align-text-bottom p-[10px]">
        <div>
          <img src="/assets/Logo.svg" alt="Logo" height={63} width={144} />
        </div>
        <div className="text-xl flex flex-row gap-2 pt-[17px] ">
          <Link
            href="/account/register"
            className="font-bold text-black no-underline"
          >
            Sign up
          </Link>
          <Link
            href="/account/login"
            className="font-bold text-black no-underline"
          >
            Log In
          </Link>
        </div>
      </nav>

      <main className="relative flex flex-col items-center justify-between w-full h-screen overflow-hidden text-base text-black bg-gray-100 isolate font-roboto">
        <img
          src="/assets/Logo.svg"
          alt="Logo"
          className="sm:hidden text-5xl tracking-[0.02em] grid place-items-center w-full h-1/2 font-black font-inherit text-gray-300  text-center"
        />
        <img src="/assets/Logo2.svg" alt="Logo" className="hidden sm:block " />

        <div className="relative flex flex-col items-center flex-grow w-full">
          <div className=" bg-ellipse absolute -z-10 rounded-[50%] bottom-0 translate-y-1/4 left-1/2 -translate-x-1/2 w-[180%] lg:w-[120%] h-[150%]" />
          <section className="relative text-black w-[263px] lg:self-start lg:ml-[20%] lg:mt-[2%] flex-grow-0 flex flex-col gap-5">
            <article className="flex items-center gap-5">
              <img
                className="w-[68px] h-[64px]"
                alt="Landscape"
                src="/assets/Group 79.svg"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-bold">Relive Memories</h3>
                <p className="text-base">
                  Walk down memory lane and create a habit of creating new
                  memories
                </p>
              </div>
            </article>
            <article className="flex items-center gap-5">
              <img
                className="w-[68px] h-[64px]"
                alt="Camera"
                src="/assets/Group 78.svg"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-bold">Storytelling</h3>
                <p className="text-base">
                  Share your authentic stories to real memories that matter the
                  most
                </p>
              </div>
            </article>
            <article className="flex items-center gap-5">
              <img
                className="w-[68px] h-[64px]"
                alt="Handshake Heart"
                src="/assets/Group 77.svg"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-bold">Discover Memories</h3>
                <p className="text-base">
                  View and be inspired by the stories of other people
                </p>
              </div>
            </article>

            <div className="flex flex-col gap-2.5 items-center w-full sm:hidden">
              <Link href="/account/register">
                <button
                  type="button"
                  className="cursor-pointer inline-block mt-10 border-0 text-white p-2.5 rounded-[15px] bg-primary w-full"
                >
                  Get Started
                </button>
              </Link>

              <Link
                href="account/login"
                className="text-lg sm:hidden tracking-[0.02em] text-[inherit] inline-block text-center text-black underline"
              >
                Sign in to existing account
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
