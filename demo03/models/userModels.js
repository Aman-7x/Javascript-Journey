import mongoose from "mongoose";
 

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String, 
        trim:true,
        required:true
    },
    password :{
        type:String, 
        trim:true,
        required:true
    },
    profile:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Profile",
        unique:true
    },
    likedPosts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
    // ,
    // post:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Post"
    // }]
},{
    timestamps:true
});

export const User = mongoose.model("User",userSchema); 


