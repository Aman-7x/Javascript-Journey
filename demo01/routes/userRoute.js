import express from "express";
import { welcome } from "../controllers/userController.js";
const route = express.Router();

route.get('/',welcome);

export default route;