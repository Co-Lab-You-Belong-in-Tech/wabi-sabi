import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DesktopHeader from './DesktopHeader';

function DesktopOnboardingPage() {
  return (
    <>
      <DesktopHeader>
        <nav className="flex items-center gap-x-2">
          <Link href="/account/register">
            <p className="text-xl font-bold px-3 py-[10px] cursor-pointer">Sign up</p>
          </Link>
          <Link href="/account/login">
            <p className="text-xl font-bold px-3 py-[10px] cursor-pointer">Log in</p>
          </Link>
        </nav>
      </DesktopHeader>

      <main className="flex flex-col items-center justify-end w-full h-screen text-base text-black bg-white font-roboto z-1">
        <div className="relative flex items-end justify-center w-full gap-x-20 h-2/3 bg-desktop-onboarding">
          <img
            src="/assets/dk-onboarding-page-tree.svg"
            alt="Logo"
            className="absolute w-48 h-40 top-[-140px] mx-auto inset-x-0"
          />
          <section className="text-black w-[263px] flex flex-col gap-5 pb-10">
            <article className="flex items-center gap-5">
              <img
                className="w-[68px] h-[64px]"
                alt="Landscape"
                src="/assets/mountain-icon.svg"
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
                src="/assets/shutter-icon.svg"
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
                src="/assets/heart-hand-icon.svg"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-bold">Discover Memories</h3>
                <p className="text-base">
                  View and be inspired by the stories of other people
                </p>
              </div>
            </article>

          </section>
          <section className="flex self-start h-full pt-12">
            <span>
              <Image
                src="/assets/dk-onboarding-page-card-1.svg"
                alt="Answer daily questions and create daily memories!"
                width={266}
                height={285}
              />
            </span>
            <span className="self-center">
              <Image
                src="/assets/dk-onboarding-page-card-2.svg"
                alt="Have easy access to all your memories in one place!"
                width={266}
                height={285}
              />
            </span>
            <span className="self-end">
              <Image
                src="/assets/dk-onboarding-page-card-3.svg"
                alt="See what memories are shared by others!"
                width={266}
                height={285}
              />
            </span>
          </section>
        </div>
      </main>
    </>
  );
}

export default DesktopOnboardingPage;
