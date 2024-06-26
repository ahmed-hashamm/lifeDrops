import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <main class="h-screen w-full flex flex-col justify-center items-center">
      <h1 class="text-9xl font-extrabold text-[#1A2238] tracking-widest">
        404
      </h1>
      <div class="bg-[#ef233c] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <Link href={"/"} class="mt-5">
        <p class="relative inline-block text-sm font-medium text-[#ef233c] group active:text-orange-500 focus:outline-none focus:ring">
          <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#ef233c] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span class="relative block px-8 py-3 text-[#1A2238]  border border-current">
            Go Home
          </span>
        </p>
      </Link>
    </main>
  );
};

export default ErrorPage;
