import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    code: {
      type: String,
      trim: true,
      required: true,
    },
    credit: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Courses = mongoose.model("Courses", courseSchema);
