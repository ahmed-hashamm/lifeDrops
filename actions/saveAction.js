"use server"

import connect from "@/dbConfig/db"
import Post from "@/models/post"



export const  submitPost= async(data)=>{
    try {
        await connect();
        const newPost = new Post(data)
        await newPost.save()
        return {status : "OK", message : "Posted Successfully"}
    } catch (error) {
        return {status : "ERROR", message : "Server Error , please try again"}
        
    }

}