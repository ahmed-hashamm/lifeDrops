'use client';
import Image from "next/image";
import FormValidator from "@/Components/FormValidator";
import InputField from "@/Components/inputField";
import Button from "@/Components/Button";
import { mainLogo } from "../images";
import { toast } from "sonner";
import {  useRouter } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { submitPost } from "@/actions/saveAction";


const DonorPage = () => {
  //authentication import
    const { isAuthenticated } = useKindeBrowserClient();
    const router = useRouter()
    //form submit function
  const handleSubmit = async (formData) => {
    try {
      const reponse = await submitPost({
        location: formData.get("location"),
        email: formData.get("email"),
        bloodGroup: formData.get("bloodGroup").toUpperCase(),
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        phone: formData.get("number"),
        institute: formData.get("institute"),
      });
      if(reponse.status === "OK") {
          toast.success("Your data has been submitted successfully")
          router.push("/searchForDonors")
        
        
      }
      else {
          toast.error("There was an error submitting your data, please try again")
        
      }
      
    } catch (error) {
      console.log(error);
    }
  };
return (
//hero section
    <section className=" flex flex-col md:flex-row gap-y-10 md:justify-around items-center md:p-8 min-h-screen bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <section className="left">
        <section className="hero flex flex-col gap-6 justify-center items-center  p-8    ">
          <div className="logo  rounded-full  bg-white shadow-lg">
            <Image src={mainLogo} alt="logo" width={200} height={200} />
          </div>
          <div className="hero-content text-center space-y-4">
            <h1>
              <span className="text-[#ef233c] font-bold">Life Drops ,</span>{" "}
              Connecting Blood Donors and Recipients
            </h1>
            <p className="italic font-medium">
              “Every drop matters. Be a hero.”
            </p>
          </div>
        </section>
      </section>
{/* {form section , show login card if user is not authenticated} */}
      <section className="form w-full md:w-auto flex justify-center p-8 md:p-0">
      {isAuthenticated ?
        <form action={handleSubmit } className="w-full md:max-w-md md:mx-auto ">
           
          <div className="relative  w-full mb-5 group">
            <InputField
            Min={5}
            Max={20}
              Name={"location"}
              labelText={"Location(City)"}
              type={"text"}
            />
          </div>
          <div className="relative  w-full mb-5 group">
            <InputField Name={"email"} labelText={"Email"} type={"email"} />
          </div>
          <div className="relative w-full mb-5 group">
            <InputField
            Min={11}
            Max={11}
              Name={"number"}
              labelText={"Ph no(0-300-000000)"}
              type={"tel"}
            />
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative  w-full mb-5 group">
              <InputField
              Min={2}
              Max={20}
                Name={"firstName"}
                labelText={"First Name"}
                type={"text"}
              />
            </div>
            <div className="relative  w-full mb-5 group">
              <InputField
                Min={2}
                Max={20}
                Name={"lastName"}
                labelText={"Last Name"}
                type={"text"}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative  w-full mb-5 group">
              <InputField
              Min={2}
              Max={10}
                Name={"bloodGroup"}
                labelText={"Blood Group"}
                type={"text"}
              />
            </div>
            <div className="relative  w-full mb-5 group">
              <InputField
              Min={4}
              Max={20}
                Name={"institute"}
                labelText={"Institute(optional)"}
                type={"text"}
              />
            </div>
          </div>
          <Button  type={"submit"} text={"Submit"}/>
        </form> :
        <FormValidator/>
        }
      </section>
    </section>
  );
};

export default DonorPage;
