import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/store";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { login } from "@/src/store/auth/auth.slice";
import { ILoginFormData } from "@/src/types/auth/ILoginFormData";


const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({ mode: "all" });

  const dispatch = useDispatch<AppDispatch>();
  
  const onSubmit = (data: ILoginFormData) => {
    dispatch(login(data));
  };
  const [passwordEye, setPasswordEye] = useState(false);

  const handlepasswordeyeclick = () => {
    setPasswordEye(!passwordEye);
  };

  return (
    <div className="flex flex-col space-y-5 p-10 pt-5 rounded-lg bg-white h-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <label htmlFor="" className="text-sm font-medium leading-5">
            Email Address
          </label>
          <input
            {...register("username", {
              required: { value: true, message: "*Username is required" },
              min: 1,
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email pattern",
              },
            })}
            type="text"
            placeholder="Enter your Email"
            className={`pl-5 w-full  h-10 rounded-lg border outline-none ${
              errors.username &&
              "focus:border-red-500 focus:ring-red-500 border-red-500"
            }`}
          />
          <div className=" text-red-500 italic text-sm ">
            {errors.username?.message}
          </div>
        </div>
        <label htmlFor="" className="text-sm font-medium leading-5">
          Password
        </label>
        <div
          className={` flex  w-full  h-10 rounded-lg border relative items-center ${
            errors.password &&
            "focus:border-red-500 focus:ring-red-500 border-red-500"
          }`}
        >
          <input
            {...register("password", {
              required: { value: true, message: "*Password is required" },
            })}
            type={passwordEye === false ? "password" : "text"}
            placeholder="Enter Password"
            className="outline-none h-10 flex-grow bg-transparent pl-5"
          />
          <div className="text-2xl opacity-30 absolute top-2 right-5">
            {passwordEye === false ? (
              <AiFillEyeInvisible onClick={() => handlepasswordeyeclick()} />
            ) : (
              <AiFillEye onClick={() => handlepasswordeyeclick()} />
            )}
          </div>
        </div>
        <div className=" text-red-500 italic text-sm ">
          {errors.password?.message}
        </div>
        <div className=" flex flex-row  p-5">
          <div className="grow items-center">
            <input type="checkbox" className="accent-orange1" /> Remember me
          </div>
          <div className="grow text-right">
            <button>
              <Link href={"../auth/forgotPassword"}>Forgot Password?</Link>
            </button>
          </div>
        </div>
        <button className=" h-12 w-full bg bg-orange1 hover:bg-orange-600 rounded-lg text-white">
          Sign In
        </button>
      </form>
      <div className="flex pt-3 items-center justify-center space-x-1">
        <span>Don't have an account?</span>
        <button className=" text-orange1 underline underline-offset-2 p-2">
          <Link href={"../auth/register"}>Sign up</Link>
        </button>
      </div>
      <div className="flex flex-row items-center space-x-5 justify-center pt-88 ">
        <span>Continue with</span>
        <div>
          <Image
            src="/Google.png"
            width={32}
            height={32}
            alt=""
            className=" items-center"
          />
        </div>
        <div>
          <Image
            src="/Facebook.png"
            width={32}
            height={32}
            alt=""
            className=" items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
