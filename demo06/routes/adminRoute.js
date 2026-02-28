import express from "express";
import { deleteUser, fetchAllUsers } from "../controllers/userController.js";
import { fetchAllCourses, fetchTopMentor } from "../controllers/courseController.js";
import { auth } from "../middlewares/authMiddleware.js";
import { authorized } from "../middlewares/authorization.js";

const route = express.Router();

route.get("/user", auth, authorized("admin"), fetchAllUsers);
route.delete("/user/:id", auth, authorized("admin"), deleteUser);
route.get("/course", auth, authorized("admin"), fetchAllCourses);
route.get("/course/top-mentor", auth, authorized("admin"), fetchTopMentor);

export default route;
