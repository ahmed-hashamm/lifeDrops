import { mainLogo } from '@/app/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
<footer id='contact' className="bg-white border-t pt-4 mt-10 text-gray-900">
    <div className="mx-auto w-full max-w-screen  ">
        <div className="sm:flex px-6 flex flex-wrap justify-center flex-col md:flex-row items-center md:justify-between ">
          <div className="mb-6 md:mb-0 mr-14 sm:mr-0 ">
              <Link href={"/"} >
                  <Image src={mainLogo} width={150} height={120} alt="Life Drops Logo" />

              </Link>
          </div>
          <div className="grid grid-cols-1 mx-4 gap-8 sm:gap-6 sm:grid-cols-3 mb-4">
              <div>
                  <h2 className="mb-6 text-sm font-bold  uppercase ">Services</h2>
                  <ul className="  font-medium">
                      <li className="mb-4">
                          <Link href={"/beADonor"} className="hover:underline">Be a Donor</Link>
                      </li>
                      <li>
                          <Link href={"/searchForDonors"} className="hover:underline">Look for Donors</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-bold  uppercase ">Follow us</h2>
                  <ul className="  font-medium ">
                      <li className="mb-4">
                          <a href="https://twitter.com/Hasham_ahme" target="_blank" className="hover:underline ">Twitter</a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/hasham-ahmed-bb11632bb/" target="_blank" className="hover:underline">Linkedin</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-bold  uppercase ">Legal</h2>
                  <ul className="  font-medium">
                      <li className="mb-4">
                          <Link href={"/privacyPolicy"} className="hover:underline">Privacy Policy</Link>
                      </li>
                      <li>
                          <a href={"/termsAndConditions"} className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      {/* <hr className="my-6 md:my-2 border-gray-200 sm:mx-auto  " /> */}
      <div className="sm:flex sm:items-center sm:justify-between px-8 py-4  bg-[#ef233c] text-white">
          <p className="text-sm text-center ">© 2024 <a href="https://flowbite.com/" className="hover:underline">Life Drops™</a>. All Rights Reserved.
          </p>
          <div className="flex mt-4 justify-center sm:items-center sm:mt-0">
        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=ahmedhasham90012@gmail.com'  target="_blank" className='text-xs flex items-center justify-center gap-x-2'> <CgMail size={20}/> </a>
             
              <a href="https://twitter.com/Hasham_ahme" target="_blank" className=" ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="https://github.com/ahmed-hashamm" target="_blank" className="  ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                  </svg>
                  <span className="sr-only">GitHub account</span>
              </a>
          </div>
      </div>
    </div>
</footer>


  )
}

export default Footer