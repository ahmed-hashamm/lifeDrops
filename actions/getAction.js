"use server";
import connect from "@/dbConfig/db"
import Post from "@/models/post"
// getting data from the database
export const  getPosts= async()=>{
    try {
        await connect();
        const data = await Post.find({});
        const posts = JSON.parse(JSON.stringify(data));
        return {status : "OK", message : "Posts retrieved successfully", data : posts}
    } catch (error) {
        console.error(error);
        return {status : "ERROR", message : "Server Error , please try again"}
    }
}