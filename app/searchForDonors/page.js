"use client";
import { getPosts } from "@/actions/getAction";
import { BiDonateBlood } from "react-icons/bi";
import { Select, Option } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { mainLogo } from "../images";
import NoPostMessage from "@/Components/NoPostMessage";
import Image from "next/image";
import LoadingSkeleton from "@/Components/LoadingSkeleton";
import ErrorPage from "@/Components/ErrorPage";
// {search for donors page}
const SearchPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bloodGroup, setBloodGroup] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [Error, setError] = useState(false);
  useEffect(() => {
    const fetchingData = async () => {
      setError(false);
      setLoading(true);
      try {
        const data = await getPosts();
        const donors = data.data;
        setPosts(donors);
        setFilteredPosts(donors); // Set filteredPosts to all posts initially
      } catch (error) {
        setError(true);
      }
    };

    fetchingData();
    setLoading(false);
  }, []);
  // {filtration based on blood group selected by user}
  const handleBloodGroupChange = (val) => {
    setLoading(true);
    const selectedBloodGroup = val;
    setBloodGroup(selectedBloodGroup);
    if (selectedBloodGroup === "All") {
      setFilteredPosts(posts);
    } else if (selectedBloodGroup) {
      const filteredPosts = posts.filter(
        (post) => post.bloodGroup === selectedBloodGroup
      );
      setFilteredPosts(filteredPosts);
    } else {
      setFilteredPosts(posts); // If no blood group is selected, show all posts
    }
    setLoading(false);
  };

  if (Error) return <ErrorPage />;

  return (
    <section className="min-h-screen space-y-8  p-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <section className="hero flex flex-col gap-6 justify-center items-center w-full p-8  min-h-[60vh] z-99   ">
        <div className="logo  rounded-full  bg-white shadow-lg">
          <Image src={mainLogo} alt="logo" width={200} height={200} />
        </div>
        <div className="hero-content text-center space-y-4">
          <h1>
            <span className="text-[#ef233c] font-bold">Life Drops ,</span>{" "}
            Connecting Blood Donors and Recipients
          </h1>
          <p className="italic font-medium">“Every drop matters. Be a hero.”</p>
        </div>
        {/* {select dropdown for filtration} */}
        <div className="w-72 mt-6">
          <Select
            value={bloodGroup}
            onChange={handleBloodGroupChange}
            label="Select Blood Group"
          >
            <Option value="All">All</Option>
            <Option value="A+">A+</Option>
            <Option value="A-">A-</Option>
            <Option value="B+">B+</Option>
            <Option value="B-">B-</Option>
            <Option value="AB+">AB+</Option>
            <Option value="AB-">AB-</Option>
            <Option value="O+">O+</Option>
            <Option value="O-">O-</Option>
          </Select>
        </div>
      </section>
      {/* {show loading cards until data is fetched from database} */}

      {filteredPosts.length ===0 && !loading  && <NoPostMessage/>}

      {loading ? (
        <LoadingSkeleton />
      ) : (
        
        <section className="posts flex gap-12 flex-wrap justify-center">
          {filteredPosts.map((post) => {
            const date = new Date(post.date);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const fullDate = day + "/" + month + "/" + year;

            
            return (
              <div
                key={post._id}
                className="card  w-80 rounded-3xl shadow-md  "
              >
                <div className="h-12 w-full rounded-t-3xl flex justify-between items-center p-6 bg-[#ef233c]">
                  <BiDonateBlood
                    className="rounded-full p-1 bg-white text-[#ef233c]"
                    size={30}
                  />
                  <span className="text-white text-[13px]">{fullDate}</span>{" "}
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
                      <p className="font-bold">
                        Contact :{" "}
                        <span className="font-medium">0{post.phone}</span>
                      </p>

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

export default SearchPage;
