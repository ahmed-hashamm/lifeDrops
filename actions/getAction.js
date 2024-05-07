"use server";
import connect from "@/dbConfig/db"
import Post from "@/models/post"

export const  getPosts= async()=>{
    try {
        await connect();
        const data = await Post.find({});
        const posts = JSON.parse(JSON.stringify(data));
        console.log(posts)
        return {status : "OK", message : "Posts retrieved successfully", data : posts}
    } catch (error) {
        console.error(error);
        return {status : "ERROR", message : "Server Error , please try again"}
    }
}