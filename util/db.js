import mongoose from "mongoose";
import dotenv from 'dotenv';
    dotenv.config();

export const connectDB = async (req , res)=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB IS CONNECTED')

    }catch(err){
        console.log('db connection error')
        process.exit(1);
    }
}