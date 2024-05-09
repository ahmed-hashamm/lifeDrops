import React from 'react'
import { CgMail } from "react-icons/cg";

const TermsAndConditions = () => {
  return (
     <section className=" h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] p-12 ">
<h1 className="text-4xl text-center tracking-tight font-bold ">Terms And Conditions</h1>
<div className=" p-10 lg:px-44 lg:py-10 space-y-8 ">

      <div className='flex gap-2 items-center'>

      <div >
        Welcome to Life Drops! These terms and conditions outline the rules and regulations for the use of Life Drops website, located at 
      <a href="" className='text-blue-700 ml-2 hover:underline'>link</a>
      </div>
      </div>
      <h2 className="text-xl font-bold mb-2">1. Terms</h2>
      <p>
        By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Life Drops website if you do not accept all of the terms and conditions stated on this page.
      </ p>
      <h2 className="text-xl font-bold mb-2">2. Use of Website</h2>
      <p>
        You must be at least 18 years of age to use this website. By using this website, you warrant that you are at least 18 years of age.
      </p>
      <p>
        You may not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website, or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.
      </p>
      <h2 className="text-xl font-bold mb-2">3. Intellectual Property</h2>
      <p>
        All intellectual property rights in this website and the material on this website are reserved.
      </p>
      <h2 className="text-xl font-bold mb-2">4. Limitation of Liability</h2>
      <p>
        Save a Life will not be liable to you (whether under the law of contract, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website:
      </p>
      <ul>
        <li>for any indirect, special or consequential loss; or</li>
        <li>for any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.</li>
      </ul>
      
      <h2 className="text-xl font-bold mb-2">6. Changes to Terms and Conditions</h2>
      <p>
        We may update these terms and conditions from time to time. If we make significant changes, we will notify you by posting a notice on our website or by sending you an email.
      </p>
      <h2 className="text-xl font-bold mb-2">7. Contact Us</h2>
      
      <div className="flex items-center gap-2">
        <p>

        If you have any questions or concerns about this terms and conditions, please contact us at 
        </p>
        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=ahmedhasham90012@gmail.com'  target="_blank" className='text-xs flex items-center justify-center '> <CgMail size={30}/> </a>

      </div>
</div>
   </section>
  );
};

export default TermsAndConditions;
export const metadata = {
  title: "Terms and Conditions - Life Drops",
  description: "Read our terms and conditions to learn about the rules and regulations that govern the use of our website and services.",
};