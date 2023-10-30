import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


const connection=async()=>{
    const URL=process.env.DB_URL;
    try {
       await mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true}) ;
       console.log("db connected");
    } catch (error) {
        console.log(error);

    }
}

export default connection;