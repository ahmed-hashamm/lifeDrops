"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { logo } from "../app/images";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import LoggedInDropDown from "./LoggedInDropDown";
import Button from "./Button";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { isAuthenticated, user } = useKindeBrowserClient();
 
  const links = [
    {
      id: 1,
      title: "home",
      link: "/",
    },

    {
        id: 4,
        title: "Contact",
        link: "#contact",
      },
  ];
  const mobileLinks = [
    {
      id: 1,
      title: "home",
      link: "/",
    },

    {
      id: 2,
      title: "Find Donors",
      link: "/searchForDonors",
    },
    {
      id: 3,
      title: "Be a Donor",
      link: "/beADonor",
    },
    {
        id: 4,
        title: "Contact",
        link: "#contact",
      },
  ];

  return (
    <nav className="flex justify-between items-center w-full h-16 px-4 bg-white border-b shadow-md nav">
      <div>
        <Link href={"/"} className="flex justify-center items-center z-50 max-w-16 ">
          <Image
            src={logo}
            alt="Logo"
            width={120}
            height={70}
           
          />
        </Link>
      </div>

      <ul className="hidden sm:flex sm:items-center">
        {links.map(({ id, link, title }) => (
          <li
            key={id}
            className="nav-links mx-6 cursor-pointer capitalize  flex items-center justify-center font-medium   text-black hover:scale-105 hover:text-[#ef233c] duration-200 link-underline"
          >
            <Link href={link}>{title}</Link>
          </li>
        ))}
       
      {!isAuthenticated ?(
            <LoginLink>
            <Button text={"Sign in"}/>
          </LoginLink>
            
          
        ) : (
            <div className="gap-x-4 flex items-center">
            <LoggedInDropDown  email={user.email} Name={user.given_name} src={user.picture} lastName={user.family_name} />
                  
            </div>
        )}
      </ul>
      

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 sm:hidden"
      >
        {/* {mobile nav} */}
        {nav ? (
          <FaTimes size={30} className="text-[#ef233c]" />
        ) : (
          <FaBars className="text-[#ef233c]" size={30} />
        )}
      </div>

      {nav && (
        <div className="absolute top-0 z-[2] h-screen w-screen left-0 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
          <ul className="flex flex-col justify-center  gap-3 items-center absolute top-0 left-0 w-full h-screen  text-gray-800">
            {mobileLinks.map(({ id, link, title }) => (
              <li
                key={id}
                className="px-4 cursor-pointer  capitalize py-6 font-medium  text-3xl"
              >
                <Link onClick={() => setNav(!nav)} href={link}>
                  {title}
                </Link>
              </li>
            ))}
            

          
            {!isAuthenticated ? (
          <LoginLink>
           <Button text={"Sign in"}/>
          </LoginLink>
        ) : (
            <LogoutLink >
            <Button  text={"Sign out"}/>
          </LogoutLink>
        )}
           
          </ul>
        </div>
      )}
      
            
    </nav>
  );
};

export default Navbar;
