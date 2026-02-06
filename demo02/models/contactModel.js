import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:{
        type:"String",
        trim : true,
        required : true
    },
    age:{
        type:"Number",
    },
    email:{
        type:"String",
        trim : true,
        required : true
    },
    contactNo:{
        type:"String",
        trim : true,
        required : true
    },
},{
    timestamps:true
});


export const Contacts = mongoose.model("Contacts",contactSchema);