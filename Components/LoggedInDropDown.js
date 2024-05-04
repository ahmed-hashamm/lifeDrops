"use client";
import React from 'react'
import { useState } from 'react';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';
import Link from 'next/link';
const LoggedInDropDown = ({email,Name,src}) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleBlur=()=>{
        setTimeout(() => {
          setIsOpen(false)
        }, 100)
      }

      return (
        <div className='relative transition duration-1000 ease-in-out'  >
          <button  onBlur={handleBlur} onClick={() => setIsOpen(!isOpen)} className="block h-12 w-12 rounded-full overflow-hidden focus:outline-none">
            <img className="h-full w-full object-cover block" src={src} alt="avatar"/>
          </button>
    <div  className={`relative ${isOpen? 'block' : 'hidden'}`}>

          <div className="absolute right-0 w-52 mt-2 py-2 bg-white border rounded shadow-xl ">
            <span className='text-xs font-semibold px-4'>Signed in as :</span>
            <p href="#" className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-[#ef233c] hover:text-white text-xs font-medium">{email}</p>
            <div >
              <p href="#" className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-[#ef233c] text-[15px] hover:text-white">{Name}</p>
              <div className="">
                <hr></hr>
              </div>
              <Link href={"/beADonor"} className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-[#ef233c] text-[15px] hover:text-white">Be a Donor</Link>
              <div className="">
                <hr></hr>
              </div>
              <LogoutLink>
                <button onClick={() => setIsOpen(false)} href="#" className="transition-colors duration-200 block px-4 py-2 w-full text-normal font-medium text-gray-900 rounded hover:bg-[#ef233c] hover:text-white">
                  Logout
                </button>
              </LogoutLink>
            </div>
          </div>
        </div>
    </div>
      )
    }
    

    
   
 

export default LoggedInDropDown
