import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = ()=>{
    try{
            mongoose.connect(process.env.MONGO_URL)
            .then((res)=>console.log('Database is Connected Successfully'))
            .catch((err)=>console.log('Failed to Connec Database , Error : ',err) )
            
    }catch(err){
        console.log(err);
    }
}