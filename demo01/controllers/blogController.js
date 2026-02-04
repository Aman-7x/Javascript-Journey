import { Blogs } from "../models/blogModel.js";

export const allBlog = async (req, res) => {
  try {
    const blogs = await Blogs.find({});
    res.status(200).json({"Blogs":blogs}); 
  } catch (err) {
    console.log(err);
    return res.status(500).json({"Error":"Internal Server Error"});
  }
};

export const createBlog = async (req, res) => {
  try {
    
    const { title, description } = req.body;


    if (!title || !description)
      return res.status(400).json({ Error: "Invalid Inputs" });

    const blog = await Blogs.create({
      title: title,
      description: description,
    });
    if (blog) {
      return res
        .status(201)
        .json({ Message: "Blog Created Successfully", blog: blog });
    } else {
      return res.status(500).json({ Error: "Internal Server Error!" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};


export const updateBlog = async(req,res)=>{
    try{
        const {title,description} = req.body;
        const {id} = req.params;

        const blog = await Blogs.find({_id:id});
        if(!blog)
          return res.status("404").json({"Error":"Blog Not Found!!"});

        const updatedBlog = await Blogs.findByIdAndUpdate({_id:id},{
          title:title,
          description:description
        },{
          new:true
        })
        
        // blog.title = title ?? blog.title;
        // blog.description = description ?? blog.description;
        // await blog.save();

        res.status(200).json({"Message":"Blog is updated",blog:updatedBlog});
        
    }catch(err){
        console.log(err);
        return res.status(200).json({"Error":"Internal Server Error"});
    }
}


export const deleteBlog = async (req,res)=>{
  try{
    const {id} = req.params;
    const blog = await Blogs.findById({_id:id});
    if(!blog)
      return res.status(404).json({"Error":"Blog Not Found"})

    const deletedBlog = await Blogs.findByIdAndDelete({_id:id});
    return res.status(200).json({"Message":"Blog is deleted",blog:deletedBlog});

  }catch(err){
      console.log(err);
      return res.status(500).json({"Error":"Internal Server Error"});
  }
}