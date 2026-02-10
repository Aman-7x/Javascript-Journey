import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    bio:{
        type:String,
        trim:true
    },
    
    age : {
        type:Number
    }
},{
    timestamps:true
});

export const Profile = mongoose.model("Profile",profileSchema); 