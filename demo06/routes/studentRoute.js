import express from "express";
import {
  enrollCourse,
  fetchAllCourses,
  fetchEnrollCourses,
} from "../controllers/courseController.js";
import { auth } from "../middlewares/authMiddleware.js";
import { authorized } from "../middlewares/authorization.js";

const route = express.Router();

route.get("/course", auth, authorized("student"), fetchAllCourses);
route.put("/course/:id", auth, authorized("student"), enrollCourse);
route.get("/course/enrolled", auth, authorized("student"), fetchEnrollCourses);

export default route;
