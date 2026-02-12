import mongoose from "mongoose";

const enrollSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Students",
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Courses",
      required: true,
    },
    semester: String,
  },
  {
    timestamps: true,
  }
);

export const Enrollment = mongoose.model("Enrollment", enrollSchema);
