import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThreeDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { VscMail, VscLock } from 'react-icons/vsc';
import { ImQuotesLeft } from 'react-icons/im';
import { BsPerson } from 'react-icons/bs';
import { registerAccount } from '../../redux/features/account/accountSlice';

import AppLayout from '../../components/Layouts/AppLayout';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // load states from redux
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.account.loading);
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);

  const router = useRouter();

  // destructure register data from state
  const { password, email, name } = formData;

  // create function to handle input onChange
  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    //
    if (!password || !email || !name) {
      toast.error('Please complete all fields');
      return;
    }

    dispatch(registerAccount(formData));
  };

  // redirect to dashboard page if user is logged in
  if (isLoggedIn) {
    router.push('/home');
  }

  return (
    <AppLayout renderSide={false} renderNav={false}>
      <main className="flex flex-col items-center justify-center w-full max-w-md min-h-screen px-12 mx-auto bg-white md:pt-20 gap-y-9">
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center w-full max-w-xs gap-4"
        >
          <div>
            <div className="flex items-center justify-center">
              <Image
                src="/assets/auth-page-logo.svg"
                alt="Logo"
                height={90}
                width={80}
              />
              <h1 className="text-5xl tracking-[0.02em] font-bold text-center">
                Sign Up
              </h1>
            </div>
            <p className="hidden text-xl text-center sm:block">
              Log in with your email address to explore your memories.
            </p>
          </div>
          <div className="flex gap-1.5 flex-row items-center rounded-[15px] border border-solid px-3 py-2 border-black w-full">
            <BsPerson className="text-2xl" />
            <input
              className="border-none bg-[transparent] box-border items-start justify-start capitalize"
              type="text"
              value={name}
              name="name"
              onChange={onChange}
              placeholder="Your name"
            />
          </div>
          <div className=" flex gap-1.5 flex-row items-center rounded-[15px] border border-solid px-3 py-2 border-black w-full">
            <VscMail className="text-2xl" />
            <input
              className="border-none bg-[transparent] box-border items-start justify-start "
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email"
            />
          </div>
          <div className=" flex gap-1.5 flex-row items-center rounded-[15px] border border-solid px-3 py-2 border-black w-full">
            <VscLock className="text-2xl" />
            <input
              className="border-none bg-[transparent] items-start justify-start  "
              type="password"
              value={password}
              name="password"
              placeholder="Password"
              minLength={8}
              onChange={onChange}
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer text-white p-2.5 rounded-[15px] bg-primary min-w-full max-w-xs"
          >
            <span className="tracking-[0.02em] text-white text-center font-bold text-3xl flex justify-center">
              {loading ? (
                <ThreeDots color="#fff" height={27} />
              ) : (
                'Create your account'
              )}
            </span>
          </button>
          <p className="text-base underline tracking-[0.02em] text-[inherit] inline-block text-center">
            Forgot Password
          </p>
        </form>
        <div className="border-[#CECECE] border-t border-b w-full text-lg font-bold flex justify-center py-2 underline">
          <Link href="/account/login">Already have an account? Sign in</Link>
        </div>
        <div>
          <div className="flex flex-col items-start justify-center w-full">
            <p className="text-3xl">
              <ImQuotesLeft />
            </p>
            <p className="text-xl tracking-[0.02em] text-center">
              Sometimes you never know the value of a{' '}
              <span className="font-semibold underline">moment</span> until it
              becomes a <span className="font-semibold underline">memory</span>.
            </p>
          </div>
          <hr className="bg-[#373737] w-16 mx-auto my-4 h-0.5" />
          <p className="text-[16px] text-center">DR. SEUSS</p>
        </div>
      </main>
    </AppLayout>
  );
}
