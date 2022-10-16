import React from "react";
import { useRouter } from "next/router";

const Home = () => {
  const { push } = useRouter();

  return (
    <>
      <nav className="hidden sm:flex justify-around drop-shadow-3xl font-roboto  align-text-bottom p-[15px]">
        <div>
          <h1 className="text-gray-300">WABI-SABI</h1>
        </div>
        <div className="flex flex-row gap-2 text-xl ">
          <a
            href="/account/register"
            className="font-bold text-gray-700 no-underline"
          >
            Sign up
          </a>
          <a
            href="/account/login"
            className="font-bold text-gray-700 no-underline"
          >
            Log In
          </a>
        </div>
      </nav>
      <main className="relative flex flex-col items-center justify-between w-full h-screen overflow-hidden text-base text-white bg-gray-100 isolate font-roboto">
        <h1 className="text-4xl tracking-[0.02em] grid place-items-center w-full h-1/2 font-black font-inherit text-gray-300  text-center">
          WABI-SABI
        </h1>
        <div className="relative flex flex-col items-center flex-grow w-full">
          <div className="absolute -z-10 bg-gray-600 rounded-[50%] bottom-0 translate-y-1/4 left-1/2 -translate-x-1/2 w-[180%] lg:w-[120%] h-[150%]" />
          <section className="relative text-gray-100 w-[263px] lg:self-start lg:ml-[20%] lg:mt-[2%] flex-grow-0 flex flex-col gap-5">
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

            <div className="flex flex-col gap-2.5 items-center w-full">
              <button
                type="button"
                onClick={() => push("/account/register")}
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
