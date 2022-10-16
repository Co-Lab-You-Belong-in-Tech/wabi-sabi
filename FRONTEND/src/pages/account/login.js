import React, { useEffect, useState } from "react";

import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";

import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { VscMail, VscLock } from "react-icons/vsc";
import { login, reset_register_success } from "../../actions/account";

const SignInPage = () => {
  // load states from redux
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.account.loading);
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  const router = useRouter();

  // create login form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      toast.error("Please provide all fields");
    } else {
      dispatch(login(formData));
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  // redirect to home page if user is logged in
  if (isLoggedIn) {
    router.push("/home");
  }
  console.log(isLoggedIn);

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
            <h1 className="text-4xl tracking-[0.02em] h-1/2 font-bold font-inherit text-gray-300  text-center">
              Sign In
            </h1>
            <p className="text-2xl text-gray-300 text-center hidden sm:block mt-[27px]">
              Log in with your email address to explore your memories.
            </p>
          </div>
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-5 items-center"
          >
            <div className=" flex gap-1.5 flex-row items-center rounded-[15px] border border-solid px-3 py-2 border-[#cecece] w-[280px]  ">
              <VscMail style={{ fontSize: 22, color: "#D0D0D2" }} />
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
            <div className=" flex gap-1.5 flex-row items-center rounded-[15px] border border-solid px-3 py-2 border-[#cecece] w-[280px]  ">
              <VscLock style={{ fontSize: 22, color: "#D0D0D2" }} />
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
              className="cursor-pointer border-0 text-white p-2.5 bg-[transparent] rounded-[15px] bg-gray-200 w-[280px] "
            >
              <b className=" tracking-[0.02em] inline-block text-white text-center font-bold text-3xl ">
                {loading ? (
                  <ThreeDots color="#FFF" height={40} width={40} />
                ) : (
                  "Log In"
                )}
              </b>
            </button>
            <a className="text-base underline tracking-[0.02em] text-[inherit] inline-block text-center">
              Forgot Password
            </a>
          </form>
          <hr className="hidden sm:block" />
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
