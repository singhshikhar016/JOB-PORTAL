import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://Shikhar016:hVe80PcVX9cRwQb7@cluster0.rf5vkwc.mongodb.net/");
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;