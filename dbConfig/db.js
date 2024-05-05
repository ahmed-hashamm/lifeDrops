import mongoose from "mongoose";
const connect = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/donors" ,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        throw new Error("Error Occured while connecting to database")
    }
}
export default connect;