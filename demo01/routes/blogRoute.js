import express from "express";
import { allBlog ,createBlog, deleteBlog, updateBlog} from "../controllers/blogController.js";
const route = express.Router();


route.get("/",allBlog);
route.post("/",createBlog);
route.put("/:id",updateBlog);
route.delete("/:id",deleteBlog);


export default route;