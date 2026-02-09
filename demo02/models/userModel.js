import mongoose from "mongoose";


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
      public_id: String,
      url: String
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
