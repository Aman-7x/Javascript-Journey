import { validationResult } from "express-validator";
import { Courses } from "../models/courseModel.js";

export const registerCourse = async (req, res) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res
        .status(400)
        .json({ Error: "Bad Request", "Error Message": result.errors });
    }

    const { title, code, credit } = req.body;

    const isExist = await Courses.findOne({ code });
    if (isExist) return res.status(400).josn({ error: "Course Already Exist" });

    const course = await Courses.create({
      title,
      code,
      credit,
    });

    if (course)
      res
        .status(201)
        .json({ Message: "Course Registerd Successfully!", Course: course });
    else
      res.status(500).json({ error: "Something Went Wrong, Try Again Later!" });
  } catch (err) {
    console.log("Error in register Course: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res
        .status(400)
        .json({ Error: "Bad Request", "Error Message": result.errors });
    }

    const { title, code, credit } = req.body;
    const { id } = req.params;

    const isExist = await Courses.findOne({ _id: id });
    if (!isExist) return res.status(404).josn({ error: "Course not found!" });

    const codeCourse = await Courses.findOne({ code });

    if (codeCourse && codeCourse?._id.toString() != isExist._id.toString())
      return res
        .status(401)
        .json({ error: "Course Already exists with this code!" });

    const course = await Courses.findByIdAndUpdate(
      { _id: id },
      {
        title,
        code,
        credit,
      },
      {
        new: true,
      }
    );

    if (course)
      res
        .status(200)
        .json({ Message: "Course Updated Successfully!", Course: course });
    else
      res.status(500).json({ error: "Something Went Wrong, Try Again Later!" });
  } catch (err) {
    console.log("Error in Update Course: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const isExist = await Courses.findOne({ _id: id });
    if (!isExist) return res.status(404).josn({ error: "Course not found!" });

    const course = await Courses.findByIdAndDelete({ _id: id });

    if (course)
      res
        .status(200)
        .json({ Message: "Course Delete Successfully!", Course: course });
    else
      res.status(500).json({ error: "Something Went Wrong, Try Again Later!" });
  } catch (err) {
    console.log("Error in Update Course: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetchCourse = async (req, res) => {
  try {
    const courses = await Courses.find();

    if (courses)
      res
        .status(200)
        .json({ Message: "Course Fetched Successfully!", Course: courses });
    else
      res.status(500).json({ error: "Something Went Wrong, Try Again Later!" });
  } catch (err) {
    console.log("Error in Fetched Course: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
