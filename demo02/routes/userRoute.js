import express from "express";
import {
  fetchUser,
  profilePic,
  signIn,
  signUp,
} from "../controllers/userController.js";
import { auth } from "../middleware/authMiddleware.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
});

const route = express.Router();

route.get("/", fetchUser);
route.post("/profile", auth, upload.single("profilePic"), profilePic);
route.post("/signIn", signIn);
route.post("/signUp", signUp);

export default route;
