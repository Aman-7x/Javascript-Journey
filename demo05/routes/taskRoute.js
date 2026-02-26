import express from "express";
import { createTask, deleteTask, fetchTask, searchTask, updateTask } from "../controllers/taskController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const route = express.Router();

route.post("/",authenticate,createTask);
route.get("/", authenticate, fetchTask);
route.get("/:id", authenticate, searchTask);
route.put("/:id", authenticate, updateTask );
route.delete("/:id", authenticate, deleteTask );

export default route;