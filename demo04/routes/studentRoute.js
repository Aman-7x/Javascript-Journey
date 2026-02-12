import express from "express";
import { body } from "express-validator";
import {
  deleteStudent,
  fetchStudents,
  registerStudent,
  updateStudent,
} from "../controllers/studentController.js";
const route = express.Router();

route.get("/", fetchStudents);

route.post(
  "/",
  body("name", "Name is required!").notEmpty(),
  body("name", "Name should be String type").isString(),
  body("email", "Email is required").notEmpty(),
  body("email", "Invalid formate(Eamil)").isEmail(),
  body("department", "Department is required!").notEmpty(),
  body("department", "Department should be Numeric type!").isString(),
  registerStudent
);

route.put(
  "/:id",
  body("name", "Name is required!").notEmpty(),
  body("name", "Name should be String type").isString(),
  body("email", "Email is required").notEmpty(),
  body("email", "Invalid formate(Eamil)").isEmail(),
  body("department", "Department is required!").notEmpty(),
  body("department", "Department should be Numeric type!").isString(),

  updateStudent
);

route.delete("/:id", deleteStudent);

export default route;
