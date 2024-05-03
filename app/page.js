import Image from "next/image";
import { mainLogo, aboutImg } from "./images";
import Button from "@/Components/Button";


export default function Home() {
  return (
    <main className=" inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] py-10 p-4 ">
      <section className="hero flex flex-col gap-8 justify-center items-center w-full  min-h-[80vh] z-99 py-14 px-8  ">
        
          <div className="logo  rounded-full  bg-white shadow-lg">
          <Image  src={mainLogo} alt="logo" width={200} height={200} />
          
        </div>
        <div className="hero-content text-center space-y-2">
          <h1>
            <span className="text-[#ef233c] font-bold">
              Save a Life , 
              </span>
              {" "}Connecting Blood Donors and Recipients</h1>
          <p className="italic font-medium">“Every drop matters. Be a hero.”</p>
        </div>
        <div className="buttons flex gap-4">
          <Button href="/beADonor" text="I'm a Donor"/>
          <Button href="/searchForDonors" text="I'm a Recipient"/>
        </div>
        
      </section>
      <section  className="about w-full md:-mt-20 lg:mt-0 px-6 md:px-24">
      <div className="bg-[#ef233c] text-white w-full px-8 shadow-sm py-10 rounded-3xl ">
  <div className="container  flex flex-col md:flex-row justify-between items-center">
    {/* Text Section */}
    <div className="md:w-3/5 md:pr-8 ">
      <h2 className="text-3xl font-bold mb-4">Connecting Donors and Recipients</h2>
      <p className="text-lg">
        Welcome to Life Drops! Our mission is simple: bridge the gap between blood donors and those in need. Whether you're urgently seeking blood or ready to donate, our community stands united. Here's how it works:
      </p>
      <ul className="list-disc pl-6 mt-4 text-[16px]">
        <li>Search for specific blood groups</li>
        <li>Contact donors directly</li>
        <li>Donors can post availability</li>
        <li>Together, we save lives</li>
      </ul>
    </div>

    {/* Image Section */}
    <div className=" mt-6 md:mt-0">
    <Image className=" rounded-full" src={aboutImg} alt="aboutImg" width={300} height={300} />
    </div>
  </div>
</div>

      </section>
    </main>
  );
}
