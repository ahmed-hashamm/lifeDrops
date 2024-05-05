"use client";
import React from "react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { IoWarningOutline } from "react-icons/io5";

const FormValidator = () => {
  return (
    <section className="card w-72  bg-white shadow-md flex flex-col  items-center justify-between gap-6 p-10">
      <div className="text-[#ef233c]">
        <IoWarningOutline size={40} />
      </div>
      <div className="text flex flex-col items-center">
        <p className="font-semibold text-gray-950">You are not Logged in </p>
        <p className="text-gray-800 font-medium">Please Login to continue</p>
      </div>
      <LoginLink>
      <div
              type="button"
              className="text-white bg-[#ef233c]  hover:bg-white hover:ring-[2px] hover:ring-[#ef233c] hover:text-[#ef233c] focus:outline-none hover:scale-105 transition-all duration-500  font-medium w-32 rounded-full  text-sm  px-5 py-2.5 text-center "
            >
              Sign in
            </div>
      </LoginLink>
    </section>
  );
};

export default FormValidator;
