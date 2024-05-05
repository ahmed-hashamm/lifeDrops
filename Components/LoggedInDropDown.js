"use client";
import React from "react";
import { useState } from "react";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";

import ProfileLoader from "./ProfileLoader";

import Link from "next/link";

import { useRouter } from "next/navigation";

const LoggedInDropDown = ({ email, Name, src, lastName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading,isAuthenticated } = useKindeBrowserClient();
  const handleBlur = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 700);
  };

 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  if (isLoading)
  return <ProfileLoader/>

  return (
    <div className="relative inline-block text-left z-50 transition-all duration-700 ease-out">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:ring-[1px] ring-gray-200 rounded-md hover:bg-gray-50 focus:outline-none "
      >
        <img
          src={src}
          alt="Profile Picture"
          className="w-10 h-10 rounded-full mr-2 ring-[1px] ring-[#ef233c]"
        />
        Logged in as {Name}
      </button>

      {isOpen && (
        <div onMouseLeave={handleBlur}
          // onBlur={handleBlur}

          className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1">
            <p className="block px-4 py-2 text-[11px] font-medium  text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              {email}
            </p>
            <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              {Name} {lastName}
            </p>
            <Link
              onClick={toggleDropdown}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              href="/beADonor"
              passHref
            >
              Be a Donor
            </Link>
            <Link
              onClick={toggleDropdown}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              href="/searchForDonors"
              passHref
            >
              Look for Donors
            </Link>
          </div>
          <LogoutLink>
            <button
              className="block px-4 py-2 text-sm text-[#ef233c] hover:text-white hover:bg-[#ef233c] rounded-b-md w-full"
              role="menuitem"
            >
              Sign out
            </button>
          </LogoutLink>
        </div>
      )}
    </div>

     
  )
};

export default LoggedInDropDown;
