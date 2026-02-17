import mongoose from 'mongoose';
import dotenv from 'dotenv';

 const DBConnection = async (req,res)=>{
    try {
       const DBConnect = await mongoose.connect(process.env.MONGO_URI) 
       console.log("DB connected")
       return DBConnect;
    } catch (error) {
        console.log("error in DB connection")
        
    }
}

export default DBConnection;