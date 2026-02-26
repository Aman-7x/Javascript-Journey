import express from "express";
import { signIn, signUp } from "../controllers/userController.js";

const route = express.Router();

// route.get("/",fetchUsers);
route.post("/signUp",signUp);
route.post("/signIn",signIn);

export default route;