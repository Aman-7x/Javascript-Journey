import mongoose from "mongoose";

export const dbConnect = ()=>{
    mongoose.connect(process.env.DB_URL)
    .then((res)=>console.log(`Database Connected Successfully`))
    .catch((err)=>console.log(`Error : ${err}`))
}