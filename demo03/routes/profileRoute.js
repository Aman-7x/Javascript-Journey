import express from "express";
import { createProfile, deleteProfile, fetechProfile, updateProfile } from "../controllers/profileController.js";
import { auth } from "../middlewares/authentication.js";

const route = express.Router();

route.get("/",auth,fetechProfile);
route.post("/",auth,createProfile);
route.put("/",auth,updateProfile);
route.delete("/",auth,deleteProfile);

export default route;