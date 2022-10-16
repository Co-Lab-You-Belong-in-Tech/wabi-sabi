import React, { useState } from "react";

import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { VscMail, VscLock } from "react-icons/vsc";
import { BsPerson } from "react-icons/bs";
import { register } from "../../actions/account";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    full_name: "",

    email: "",
    password: "",
    // password2: "",
  });

  // load states from redux
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.account.loading);
  const register_success = useSelector(
    (state) => state.account.register_success
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
      toast.error("Please complete all fields");
      return;
    }

    dispatch(register({ ...formData, name: full_name }));
  };

  // redirect to dashboard page if user is logged in
  if (isLoggedIn) {
    router.push("/home");
  }

  // if register success, redirect to login page
  if (register_success) {
    router.push("/account/login");
  }

  return (
    <>
      <nav className="hidden sm:block  drop-shadow-3xl font-roboto p-[15px]">
        <div>
          <h1 className="text-gray-300 pl-20 text-left">WABI-SABI</h1>
        </div>
      </nav>
      <main className="relative grid place-items-center bg-gray-100 w-full h-screen overflow-hidden text-[35px] text-gray-300 font-roboto">
        <div className="flex flex-col gap-14">
          <div>
            <h1 className="text-4xl h-1/2 sm:hidden text-[inherit] tracking-[0.02em] font-bold font-inherit text-gray-300  text-center">
              Sign Up
            </h1>
            <h1 className="hidden sm:block text-4xl h-1/2  text-[inherit] tracking-[0.02em] font-bold font-inherit text-gray-300  text-center">
              Create an account
            </h1>
            <p className="text-2xl text-center text-gray-300 hidden sm:block mt-[27px]">
              Sign up here to start creating new memories.
            </p>
          </div>
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-5 items-center"
          >
            <div className=" flex gap-1.5 flex-row items-center rounded-[15px] border border-solid px-3 py-2 border-[#cecece] w-[280px]  ">
              <BsPerson style={{ fontSize: 22, color: "#D0D0D2" }} />
              <input
                className={`border-none bg-[transparent] box-border items-start justify-start `}
                type="text"
                value={full_name}
                name="full_name"
                onChange={onChange}
                placeholder=" Your name"
                required
              />
            </div>

            <div className=" flex gap-1.5 flex-row items-center rounded-[15px] border border-solid px-3 py-2 border-[#cecece] w-[280px]  ">
              <VscMail style={{ fontSize: 22, color: "#D0D0D2" }} />
              <input
                className={`border-none bg-[transparent] box-border items-start justify-start `}
                type="email"
                value={email}
                name="email"
                onChange={onChange}
                placeholder=" Email"
                required
              />
            </div>
            <div className=" flex gap-1.5 flex-row items-center rounded-[15px] border border-solid px-3 py-2 border-[#cecece] w-[280px]  ">
              <VscLock style={{ fontSize: 22, color: "#D0D0D2" }} />
              <input
                className={`border-none bg-[transparent] box-border items-start justify-start `}
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
              className="cursor-pointer border-0 text-white p-2.5 bg-[transparent] rounded-[15px] bg-gray-200 w-[280px] "
            >
              <b className=" tracking-[0.02em] inline-block text-white text-center font-bold text-3xl ">
                {loading ? (
                  <ThreeDots color="#FFF" height={40} width={40} />
                ) : (
                  "Create your account"
                )}
              </b>
            </button>
          </form>
          <hr className="hidden sm:block" />
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
