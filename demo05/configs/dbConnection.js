import mongoose from "mongoose";


export const dbConnect = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then((res)=>console.log("Database connected Successfully"))
    .catch((err)=>console.log(err)
    )
}