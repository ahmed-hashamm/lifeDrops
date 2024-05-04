"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { logo } from "../app/images";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import LoggedInDropDown from "./LoggedInDropDown";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { isAuthenticated, isLoading,user } = useKindeBrowserClient();
  console.log(user)
  const links = [
    {
      id: 1,
      title: "home",
      link: "/",
    },

    {
      id: 2,
      title: "find",
      link: "/searchForDonors",
    },
    {
      id: 3,
      title: "Donate",
      link: "/beADonor",
    },
  ];

  return (
    <nav className="flex justify-between items-center w-full h-16 px-4 bg-white border-b shadow-md nav">
      <div>
        <Link href={"/"} className="flex justify-center items-center max-w-16 ">
          <Image
            src={logo}
            alt="Logo"
            width={120}
            height={70}
           
          />
        </Link>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, title }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize  flex items-center justify-center font-medium   text-black hover:scale-105 hover:text-[#ef233c] duration-200 link-underline"
          >
            <Link href={link}>{title}</Link>
          </li>
        ))}
        {!isAuthenticated ? (
          <LoginLink>
            <button
              type="button"
              className="text-white bg-[#ef233c] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center "
            >
              Sign in
            </button>
          </LoginLink>
        ) : (
          <LoggedInDropDown  email={user.email} Name={user.given_name} src={user.picture} />
        )}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? (
          <FaTimes size={30} className="text-[#ef233c]" />
        ) : (
          <FaBars className="text-[#ef233c]" size={30} />
        )}
      </div>

      {nav && (
        <div className="absolute top-0 z-[2] h-screen w-screen left-0 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
          <ul className="flex flex-col justify-center  items-center absolute top-0 left-0 w-full h-screen  text-gray-800">
            {links.map(({ id, link, title }) => (
              <li
                key={id}
                className="px-4 cursor-pointer  capitalize py-6 font-medium mb-2 text-3xl"
              >
                <Link onClick={() => setNav(!nav)} href={link}>
                  {title}
                </Link>
              </li>
            ))}
            {!isAuthenticated ? (
          <LoginLink>
            <button
              type="button"
              className="text-white bg-[#ef233c] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center "
            >
              Sign in
            </button>
          </LoginLink>
        ) : (
            <LogoutLink>
            <button
              type="button"
              className="text-white bg-[#ef233c] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center "
            >
              Sign out
            </button>
          </LogoutLink>
        )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
