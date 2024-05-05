// "use server";
// import { submitPost } from "@/submitPost/action";

// export const handleSubmit = async (formData,status) => {
//     try {
//       const response = await submitPost({
//         location: formData.get("location"),
//         email: formData.get("email"),
//         bloodGroup: formData.get("bloodGroup"),
//         firstName: formData.get("firstName"),
//         lastName: formData.get("lastName"),
//         phNo: formData.get("number"),
//         institute: formData.get("institute"),
//       });
//       if(response.status === "OK") {
//         console.log("Your request has been submitted successfully");
       
//       }
//       if(response.status === "ERROR") {
//         console.log("Something went wrong");
//       }
      
//       console.log(response.status);
//       const status = response.status
//       return status
      
//     } catch (error) {
//         console.log(error);
//     }
// }

