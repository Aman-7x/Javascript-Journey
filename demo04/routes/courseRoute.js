import express from "express";
import { body } from "express-validator";
import {
  deleteCourse,
  fetchCourse,
  registerCourse,
  updateCourse,
} from "../controllers/courseController.js";

const route = express.Router();

route.get("/", fetchCourse);

route.post(
  "/",
  body("title", "Title is required!").notEmpty(),
  body("title", "Title should be String type").isString(),
  body("code", "Code is required").notEmpty(),
  body("code", "Code should be String type").isString(),
  body("credit", "Credit is required!").notEmpty(),
  body("credit", "Credit should be Numeric type!").isNumeric(),
  registerCourse
);

route.put(
  "/:id",
  body("title", "Title is required!").notEmpty(),
  body("title", "Title should be String type").isString(),
  body("code", "Code is required").notEmpty(),
  body("code", "Code should be String type").isString(),
  body("credit", "Credit is required!").notEmpty(),
  body("credit", "Credit should be Numeric type!").isNumeric(),
  updateCourse
);

route.delete("/:id", deleteCourse);

export default route;
