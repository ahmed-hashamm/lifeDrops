import mongoose from "mongoose";
const connect = async()=>{
    const uri=process.env.MONGODB_URI ;
    console.log(uri);
    try {
        await mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        throw new Error("Error Occured while connecting to database")
    }
}
export default connect;