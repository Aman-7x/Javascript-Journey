import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({
    title :{
        type : String,
        trim : true,
        required:true
    },
    description :{
        type : String,
        trim : true,
        required:true
    }
},{
    timestamps:true
});

export const Blogs = mongoose.model('Blogs',blogSchema); 