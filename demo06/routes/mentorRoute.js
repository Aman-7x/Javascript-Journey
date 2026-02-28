import express from "express";
import { body } from "express-validator";
import {
  createCourse,
  deleteCourse,
  fetchOwnCourses,
  updateCourse,
} from "../controllers/courseController.js";
import { auth } from "../middlewares/authMiddleware.js";
import { authorized } from "../middlewares/authorization.js";

const route = express.Router();

route.post(
  "/course",
  auth,
  authorized("mentor"),
  body("title", "title is Required").notEmpty(),
  body("title", "title must be String type").isString(),
  body("description", "description is Required").notEmpty(),
  body("description", "description must be String type").isString(),
  body("price", "price is Required").notEmpty(),
  body("price", "price must be Number type").isNumeric(),
  createCourse
);

route.put("/course/:id", auth, authorized("mentor"), updateCourse);
route.delete("/course/:id", auth, authorized("mentor"), deleteCourse);
route.get("/course", auth, authorized("mentor"), fetchOwnCourses);

export default route;
