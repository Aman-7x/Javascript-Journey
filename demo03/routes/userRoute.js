import express from "express";
import { allUser, createUser, signIn } from "../controllers/userController.js";

const route = express.Router();

route.get("/",allUser);
route.post("/signIn",signIn);
route.post("/signUp",createUser);
// route.put("/",);
// route.delete("/",);

export default route;