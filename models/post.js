import mongoose from "mongoose";
const postSchema = new mongoose.Schema ({
    location:String,
    email:String,
    bloodGroup:String,
    firstName:String,
    lastName:String,
    phone:String,
    institute:String,
    date:{
        type : Date,
        default : Date.now
    }
})
module.exports = mongoose.models.post || mongoose.model('post', postSchema);
