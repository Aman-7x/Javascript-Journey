import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true
    },
    description:{
        type:String,
        trim:true,
        required:true
    },
    rating : {
        type:Number
    },
    isPublic  : Boolean
    ,
    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    likedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ]
},{
    timestamps:true
});

export const Post = mongoose.model("Post",postSchema); 