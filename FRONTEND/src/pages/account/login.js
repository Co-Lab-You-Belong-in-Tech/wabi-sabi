/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';

import { ThreeDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { VscMail, VscLock } from 'react-icons/vsc';
import { login, reset_register_success } from '../../actions/account';

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
  }, []);

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
    <>
      <nav className="hidden sm:block  drop-shadow-3xl font-roboto p-[15px]">
        <div>
          <img
            src="/assets/Logo.svg"
            alt="Logo"
            className=" pl-20"
            // height={63}
            width={144}
          />
        </div>
      </nav>
      <main className="relative grid place-items-center bg-gray-100 w-full h-screen overflow-hidden text-[35px] text-gray-300 font-roboto">
        <div className="flex flex-col gap-14">
          <div>
            <div className="flex justify-center items-center">
              <img src="/assets/Logo3.svg" alt="Logo" />
              <h1 className="text-4xl tracking-[0.02em] h-1/2 font-bold font-inherit text-gray-300  text-center">
                Sign In
              </h1>
            </div>
            <p className="text-2xl text-gray-300 text-center hidden sm:block mt-[27px]">
              Log in with your email address to explore your memories.
            </p>
          </div>
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-5 items-center"
          >
            <div className=" flex gap-1.5 flex-row items-center rounded-[15px] border border-solid px-3 py-2 border-[#000] w-[280px]  ">
              <VscMail style={{ fontSize: 22, color: '#000' }} />
              <input
                className={`border-none bg-[transparent] box-border items-start justify-start `}
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Email"
                required
              />
            </div>
            <div className=" flex gap-1.5 flex-row items-center rounded-[15px] border border-solid px-3 py-2 border-[#000] w-[280px]  ">
              <VscLock style={{ fontSize: 22, color: '#000' }} />
              <input
                className={`border-none bg-[transparent] items-start justify-start  `}
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
              className="cursor-pointer border-0 text-white p-2.5  rounded-[15px] bg-green-200 w-[280px] "
            >
              <b className=" tracking-[0.02em] inline-block text-white text-center font-bold text-3xl ">
                {loading ? (
                  <ThreeDots color="#FFF" height={40} width={40} />
                ) : (
                  'Log In'
                )}
              </b>
            </button>
            <a className="text-base underline tracking-[0.02em] text-[inherit] inline-block text-center">
              Forgot Password
            </a>
          </form>
          <hr className="bg-[#CECECE] " />
          <div>
            <div className="w-ful max-w-[285px] mx-autoflex flex-col justify-center items-center">
              <p className="text-2xl tracking-[0.02em] text-center">
                <span className="font-semibold underline">Memory</span> ... is
                the diary that we all carry about with us.
              </p>
              <p className="text-right">&#8221;</p>
            </div>
            <hr className="bg-[#373737] w-16 m-auto" />
            <p className="text-[16px] text-center text-[#373737] mt-4">
              OSCAR WILDE
            </p>
          </div>
          <a
            href="/account/register"
            className="text-gray-300 font-bold text-xl text-center hidden sm:block"
          >
            No account? Register now
          </a>
        </div>
      </main>
    </>
  );
};

export default SignInPage;
