import mongoose from "mongoose";

export const dbConnect = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then((result)=>console.log('Database Connected Successfully'))
    .catch((err)=>console.log('ERROR : ',err))
}