import React from "react";
import { CgMail } from "react-icons/cg";

const PrivacyPolicy = () => {
  return (
    <section className=" h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] p-14 space-y-4">

      <h1 className="text-5xl text-center tracking-tight font-bold ">Privacy Policy</h1>
    <div className=" p-10 lg:px-48 lg:py-10 space-y-8 ">
      <p >
        At Life Drops, we are committed to protecting your privacy and ensuring that your personal information is secure. This privacy policy explains how we collect, use, and disclose your personal information when you use our website.
      </p>
      <div>

      <h2 className="text-xl font-bold mb-2">Information Collection and Use</h2>
      <p>
        We collect personal information from you when you voluntarily provide it to us, such as when you register for an account, make a donation, or contact us. The personal information we collect may include your name, email address, phone number, and mailing address.
      </p>
      <p>
        We use this information to provide you with the services you request, to communicate with you, and to improve our website and services. We may also use your personal information to send you promotional materials or newsletters, but you can opt out of these communications at any time.
      </p>
      </div>
      <div>

      <h2 className="text-xl font-bold mb-2">Information Sharing and Disclosure</h2>
      <p>
        We do not sell or rent your personal information to third parties. However, we may share your personal information with third-party service providers who perform services on our behalf, such as payment processing or data analysis. These service providers are contractually obligated to protect your personal information and use it only for the purposes for which it was disclosed.
      </p>
      <p>
        We may also disclose your personal information if required to do so by law or in response to a subpoena, court order, or other legal process.
      </p>
      </div>
      <div>

      <h2 className="text-xl font-bold mb-2">Data Security</h2>
      <p>
        We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no security measures are perfect, and we cannot guarantee the security of your personal information.
      </p>
      </div>
      <div>

      <h2 className="text-xl font-bold mb-2">Changes to this Privacy Policy</h2>
      <p>
        We may update this privacy policy from time to time. If we make significant changes, we will notify you by posting a notice on our website or by sending you an email.
      </p>
      </div>
      <div>

      <h2 className="text-xl font-bold mb-2">Contact Us</h2>
      <div className="flex items-center gap-2">
        <p>

        If you have any questions or concerns about this privacy policy, please contact us at 
        </p>
        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=ahmedhasham90012@gmail.com'  target="_blank" className='text-xs flex items-center justify-center '> <CgMail size={30}/> </a>

      </div>
      </div>
    </div>
    </section>
  );
};

export default PrivacyPolicy;