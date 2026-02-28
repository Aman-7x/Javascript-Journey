import express from "express";
import { signIn, signUp } from "../controllers/authenticationController.js";
import { body } from "express-validator";

const route = express.Router();

route.post(
  "/signup",
  body("name", "Name is Required").notEmpty(),
  body("name", "Name must be String type").isString(),
  body("email", "Email is Required").notEmpty(),
  body("email", "Enter Valid Email").isEmail(),
  body("password", "Password is Required").notEmpty(),
  body("password", "Password must be String type").isString(),
  body("role", "Role is Required").notEmpty(),
  body("role", "Role must be String type").isString(),
  signUp
);
route.post(
  "/signin",
  body("email", "Email is Required").notEmpty(),
  body("email", "Enter Valid Email").isEmail(),
  body("password", "Password is Required").notEmpty(),
  body("password", "Password must be String type").isString(),
  signIn
);

export default route;
