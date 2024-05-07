"use client";
import { getPosts } from "@/actions/getAction";
import { MdBloodtype } from "react-icons/md";
import { BiDonateBlood } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { mainLogo } from "../images";
import Button from "@/Components/Button";
import Link from "next/link";
import Image from "next/image";
import LoadingSkeleton from "@/Components/LoadingSkeleton";
const page = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bloodGroup, setBloodGroup] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const handleSubmit = async () => {
      setLoading(true);
      try {
        const data = await getPosts();
        const donors = data.data;
        console.log(donors);

        setPosts(donors);
        setFilteredPosts(donors); // Set filteredPosts to all posts initially
      } catch (error) {
        console.log(error);
      }
    };

    handleSubmit();
    setLoading(false);
  }, [getPosts]);

  const handleBloodGroupChange = (event) => {
    const selectedBloodGroup = event.target.value;
    setBloodGroup(selectedBloodGroup);

    if (selectedBloodGroup) {
      const filteredPosts = posts.filter((post) => post.bloodGroup === selectedBloodGroup);
      setFilteredPosts(filteredPosts);
    } else {
      setFilteredPosts(posts); // If no blood group is selected, show all posts
    }
  };
  return (
    <section className="min-h-screen space-y-4  p-14">
      <section className="hero flex flex-col gap-6 justify-center items-center w-full p-8  min-h-[60vh] z-99   ">
        <div className="logo  rounded-full  bg-white shadow-lg">
          <Image src={mainLogo} alt="logo" width={200} height={200} />
        </div>
        <div className="hero-content text-center space-y-4">
          <h1>
            <span className="text-[#ef233c] font-bold">Save a Life ,</span>{" "}
            Connecting Blood Donors and Recipients
          </h1>
          <p className="italic font-medium">“Every drop matters. Be a hero.”</p>
        </div>
          {/* <div  >
          
          <Button text="I'm a Donor" />
          </div>
          <Link href={"/searchForDonors"}>
          <Button text="I'm a Recipient" />
        </Link> */}
        <div className="options rounded-xl  ring-2 p-3 ring-[#ef233c]">
           <select className="border-white rounded-xl bg-white   focus:bg-white  outline-white focus:outline-none " value={bloodGroup} onChange={handleBloodGroupChange}>
            <option disabled value="">Select Blood Group</option>
            <option value="">All</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
      </section>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <section className="posts flex gap-12 flex-wrap justify-center">
          


          {filteredPosts.map((post) => {
            const date = new Date(post.date);
            const day = date.getDate();
            const month = date.getMonth();
            const year = date.getFullYear();
            const fullDate = day + "/" + month + "/" + year;
            return (
              <div
                key={post._id}
                className="card  w-80 rounded-3xl shadow-md  "
              >
                {/* <div className=" mx-auto flex justify-center items-center h-10 mb-6 md:mr-6 flex-shrink-0 text-red-500">
            <MdBloodtype size={20} />
            </div> */}
                <div className="h-12 w-full rounded-t-3xl flex justify-between items-center p-6 bg-[#ef233c]">
                  <BiDonateBlood
                    className="rounded-full p-1 bg-white text-[#ef233c]"
                    size={30}
                  />
                  <span className="text-white">{fullDate}</span>{" "}
                </div>
                <div className="p-6">
                  <div className="flex-grow  gapy-3 ">
                    <p className="font-bold">
                      {post.firstName} {post.lastName}
                    </p>
                    <h3 className=" font-bold">
                      Blood Group :{" "}
                      <span className="text-[#ef233c">{post.bloodGroup}</span>
                    </h3>
                    <p>
                      <span className="font-bold">Location :</span>{" "}
                      {post.location}
                    </p>
                    <p>
                      <span className="font-bold">Institue :</span>{" "}
                      {post.institute}
                    </p>
                    <div className="space-y-1">
                      <p className="font-bold">Contact :</p>
                      <p className=" text-sm">{post.phone}</p>
                      <p className=" text-sm">{post.email}</p>
                    </div>
                  </div>
                </div>{" "}
              </div>
            );
          })}
        </section>
      )}
    </section>
  );
};

export default page;
