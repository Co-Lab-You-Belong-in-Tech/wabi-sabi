import React, { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { VscMail, VscLock } from 'react-icons/vsc';
import { BsPerson } from 'react-icons/bs';
import { register } from '../../actions/account';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    // password2: "",
  });

  // load states from redux
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.account.loading);
  const register_success = useSelector(
    (state) => state.account.register_success,
  );
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  const router = useRouter();

  // destructure register data from state
  const { password, email, full_name } = formData;

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
    if (!password || !email || !full_name) {
      toast.error('Please complete all fields');
      return;
    }

    dispatch(register({ ...formData, name: full_name }));
  };

  // redirect to dashboard page if user is logged in
  if (isLoggedIn) {
    router.push('/home');
  }

  // if register success, redirect to login page
  if (register_success) {
    router.push('/account/login');
  }

  return (
    <>
      <nav className="hidden sm:block  drop-shadow-3xl font-roboto p-[1px] bg-white">
        <div>
          <img src="/assets/Logo.svg" alt="Logo" height={63} width={144} />
        </div>
      </nav>
      <main className="relative grid place-items-center bg-gray-100 w-full h-screen overflow-hidden text-[35px] text-gray-300 font-roboto">
        <div className="flex flex-col gap-14">
          <div className="grid place-items-center">
            <div className="flex items-center sm:hidden ">
              <img src="/assets/Logo3.svg" alt="" width={89} height={94} />
              <h1 className="text-5xl h-1/2 sm:hidden text-[inherit] tracking-[0.02em] font-bold font-inherit text-black  text-center">
                Sign Up
              </h1>
            </div>
            <div className="items-center hidden sm:flex">
              <img src="/assets/Logo3.svg" alt="" width={89} height={94} />
              <h1 className=" text-5xl h-1/2  text-[inherit] tracking-[0.02em] font-bold font-inherit text-gray-300  text-center">
                Create an account
              </h1>
            </div>
            <p className="text-2xl text-center text-gray-300 hidden sm:block mt-[27px]">
              Sign up here to start creating new memories.
            </p>
          </div>
          <form
            onSubmit={onSubmit}
            className="flex flex-col items-center gap-5"
          >
            <div className=" flex gap-1.5 flex-row items-center rounded-[15px] border border-solid px-3 py-2 border-[#000] w-[280px]  ">
              <BsPerson style={{ fontSize: 22, color: '#000' }} />
              <input
                className="border-none bg-[transparent] box-border items-start justify-start "
                type="text"
                value={full_name}
                name="full_name"
                onChange={onChange}
                placeholder=" Your name"
                required
              />
            </div>

            <div className=" flex gap-1.5 flex-row items-center rounded-[15px] border border-solid px-3 py-2 border-[#000] w-[280px]  ">
              <VscMail style={{ fontSize: 22, color: '#000' }} />
              <input
                className="border-none bg-[transparent] box-border items-start justify-start "
                type="email"
                value={email}
                name="email"
                onChange={onChange}
                placeholder=" Email"
                required
              />
            </div>
            <div className=" flex gap-1.5 flex-row items-center rounded-[15px] border border-solid px-3 py-2 border-[#000] w-[280px]  ">
              <VscLock style={{ fontSize: 22, color: '#000' }} />
              <input
                className="border-none bg-[transparent] box-border items-start justify-start "
                type="password"
                value={password}
                name="password"
                onChange={onChange}
                placeholder="Password"
                minLength={8}
                required
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer border-0 text-white p-2.5 rounded-[15px] bg-primary w-[280px] "
            >
              <b className=" tracking-[0.02em] inline-block text-white text-center font-bold text-3xl ">
                {loading ? (
                  <ThreeDots color="#FFF" height={40} width={40} />
                ) : (
                  'Create your account'
                )}
              </b>
            </button>
          </form>

          <hr className="bg-[#CECECE] " />
          <div>
            <div className="w-ful max-w-[285px] mx-autoflex flex-col justify-center items-center mb-3">
              <p className="text-2xl tracking-[0.02em] text-center">
                <p className="text-left">&#8221;</p>
                Sometimes you never know the value of a
                {' '}
                <span className="font-semibold underline">moment</span>
                {' '}
                until it
                becomes a
                {' '}
                <span className="font-semibold underline">memory</span>
                .
              </p>
            </div>
            <hr className="bg-[#373737] w-16 m-auto" />
            <p className="text-[16px] text-center text-[#373737] mt-4">
              DR. SEUSS
            </p>
          </div>
          <a
            href="/account/register"
            className="hidden text-xl font-bold text-center text-gray-300 sm:block"
          >
            No account? Register now
          </a>
          <a
            href="/account/login"
            className="font-bold text-[14px] text-gray-300 text-center hidden sm:block"
          >
            Already have an account? Sign in
          </a>
        </div>
      </main>
    </>
  );
};

export default SignUpPage;
