import mongoose from "mongoose";
const connect = async()=>{
    try {
        await mongoose.connect("mongodb+srv://ahmedhasham90012:FhbkFU4WFsHOZsxZ@life-drops.f1ksiac.mongodb.net/donor-posts" ,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        throw new Error("Error Occured while connecting to database")
    }
}
export default connect;