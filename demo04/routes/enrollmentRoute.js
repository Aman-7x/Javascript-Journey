import express from "express";
import { body } from "express-validator";
import {
  deleteEnroll,
  enrollStudent,
  getCourseStudents,
  getStudentCourses,
  updateEnroll,
} from "../controllers/enrollmentController.js";

const route = express.Router();

route.get("/:id", updateEnroll);
route.get("/course/:id", getCourseStudents);
route.get("/student/:id", getStudentCourses);

route.post(
  "/",
  body("student", "Student Id is required!").notEmpty(),
  body("student", "Student Id should be String type").isString(),
  body("course", "Course Id is required").notEmpty(),
  body("course", "Course Id should be String type").isString(),
  enrollStudent
);

route.delete(
  "/",
  body("student", "Student Id is required!").notEmpty(),
  body("student", "Student Id should be String type").isString(),
  body("course", "Course Id is required").notEmpty(),
  body("course", "Course Id should be String type").isString(),
  deleteEnroll
);

export default route;
