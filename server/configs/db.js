import mongoose, { connect } from "mongoose";

const connectDB = async()=>{
    try {
        mongoose.connection.on("connected", ()=>console.log("MongoDB connected successfully"));
        await mongoose.connect(`${process.env.MONGODB_URI}/ShaswataCodes`);
    } catch (error) {
        console.log("Error in DB connection", error);
    }
}
export default connectDB;