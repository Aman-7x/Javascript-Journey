import express from "express";
import { createContact, deleteContact, fetchContact, updateContact } from "../controllers/contactController.js";
import { auth } from "../middleware/authMiddleware.js";

const route = express.Router();

route.get("/",auth,fetchContact);
route.post("/",createContact)
route.put("/:id",updateContact  )
route.delete("/:id",deleteContact)

     
export default route; 