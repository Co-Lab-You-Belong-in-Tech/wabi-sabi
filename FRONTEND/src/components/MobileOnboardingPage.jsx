import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MobileOnboardingPage() {
  return (
    <main className="flex flex-col items-center justify-around w-full min-h-screen gap-12 overflow-hidden text-base text-black bg-white">
      <Image
        src="/assets/wabi-sabi-logo.svg"
        alt="Logo"
        priority
        width={300}
        height={180}
      />
      <div className="flex flex-col items-center w-full pt-20 pb-10 bg-mobile-onboarding">
        <section className="flex flex-col w-4/5 max-w-lg gap-5 mx-auto text-black">
          <article className="flex items-center gap-5">
            <img
              className="w-[68px] h-[64px]"
              alt="Landscape"
              src="/assets/mountain-icon.svg"
            />
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold">Relive Memories</h3>
              <p className="text-xl">
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
              <p className="text-xl">
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
              <p className="text-xl">
                View and be inspired by the stories of other people
              </p>
            </div>
          </article>

          <div className="flex flex-col items-center w-full mt-8 gap-y-3">
            <Link href="/account/register">
              <button
                type="button"
                className="cursor-pointer inline-block text-white p-2.5 rounded-[15px] bg-primary w-full"
              >
                Get Started
              </button>
            </Link>

            <Link href="account/login">
              <p className="text-lg tracking-[0.02em] text-center text-black underline">
                {' '}
                Sign in to existing account
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
