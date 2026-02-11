import express from "express";
import { createPost, deletePost, fetchPost, likePost, updatePost } from "../controllers/postController.js";
import { auth } from "../middlewares/authentication.js";

const route = express.Router();

route.get("/",auth,fetchPost);
route.post("/",auth,createPost);
route.put("/:id",auth,updatePost);
route.delete("/:id",auth,deletePost);
route.post("/like/:id",auth, likePost );

export default route;