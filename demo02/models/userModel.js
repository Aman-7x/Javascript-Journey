import mongoose from "mongoose";
import { profile } from "node:console";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    profilePic: {
      imageName: String,
      address: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
