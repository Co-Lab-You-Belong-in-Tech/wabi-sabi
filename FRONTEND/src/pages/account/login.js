import React, { useEffect, useState } from 'react';
import { ImQuotesRight } from 'react-icons/im';
import { ThreeDots } from 'react-loader-spinner';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-toastify';

import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { VscMail, VscLock } from 'react-icons/vsc';
import { login, reset_register_success } from '../../actions/account';
import AppLayout from '../../components/Layouts/AppLayout';

const SignInPage = () => {
  // load states from redux
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.account.loading);
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  const router = useRouter();

  // create login form state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // destructure login data from state
  const { email, password } = formData;

  useEffect(() => {
    dispatch(reset_register_success());
  }, [dispatch]);

  // create function to handle input onChange
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // create form submit handler function
  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please provide all fields');
      return;
    }
    dispatch(login(formData));
    setFormData({
      email: '',
      password: '',
    });
  };

  // redirect to home page if user is logged in
  if (isLoggedIn) {
    router.push('/home');
  }

  return (
    <AppLayout renderSide={false}>
      <main className="flex flex-col items-center justify-around w-full max-w-md min-h-screen px-12 pt-20 mx-auto bg-white">
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center w-full max-w-xs gap-4"
        >
          <div>
            <div className="flex items-center justify-center">
              <Image
                src="/assets/Logo3.svg"
                alt="Logo"
                height={90}
                width={80}
              />
              <h1 className="text-5xl tracking-[0.02em] font-bold text-center">
                Sign In
              </h1>
            </div>
            <p className="hidden text-xl text-center sm:block">
              Log in with your email address to explore your memories.
            </p>
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
              required
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
              required
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer text-white p-2.5 rounded-[15px] bg-primary min-w-full max-w-xs"
          >
            <span className="tracking-[0.02em] text-white text-center font-bold text-3xl flex justify-center">
              {loading ? <ThreeDots color="#fff" height={27} /> : 'Log In'}
            </span>
          </button>
          <p className="text-base underline tracking-[0.02em] text-[inherit] inline-block text-center mb-2">
            Forgot Password
          </p>
        </form>
        <div className="border-[#CECECE] border-t border-b w-full text-lg font-bold flex justify-center py-2 underline">
          <Link href="/account/register">No account? Register now</Link>
        </div>
        <div>
          <div className="flex flex-col items-end justify-center w-full">
            <p className="text-xl tracking-[0.02em] text-center">
              <span className="font-semibold underline">Memory</span> ... is the
              diary that we all carry about with us.
            </p>
            <p className="text-3xl">
              <ImQuotesRight />
            </p>
          </div>
          <hr className="bg-[#373737] w-16 mx-auto my-4 h-0.5" />
          <p className="text-[16px] text-center">OSCAR WILDE</p>
        </div>
      </main>
    </AppLayout>
  );
};

export default SignInPage;
