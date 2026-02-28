import { Courses } from "../models/courseModel.js";
import { validationResult } from "express-validator";

export const fetchAllCourses = async (req, res) => {
  try {
    const courses = await Courses.find({});

    if (courses)
      return res
        .status(200)
        .json({ Message: "Courses Fetched Successfully", courses: courses });
    else
      return res
        .status(500)
        .json({ Error: "Something went wrong try again later!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error!" });
  }
};
export const fetchTopMentor = async (req, res) => {
  try {
    const courses = await Courses.find()
      .sort({ studentsEnrolled: -1 })
      .populate("mentor");

    if (courses)
      return res
        .status(200)
        .json({
          Message: "Mentor Fetched Successfully",
          mentor: courses[0].mentor.name,
          courses: courses.length,
        });
    else
      return res
        .status(500)
        .json({ Error: "Something went wrong try again later!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error!" });
  }
};

export const fetchOwnCourses = async (req, res) => {
  try {
    const courses = await Courses.find({ mentor: req.user._id });

    if (courses)
      return res
        .status(200)
        .json({ Message: "Courses Fetched Successfully", courses: courses });
    else
      return res
        .status(500)
        .json({ Error: "Something went wrong try again later!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error!" });
  }
};

export const fetchEnrollCourses = async (req, res) => {
  try {
    const courses = await Courses.find({ studentsEnrolled: req.user._id });

    if (courses)
      return res
        .status(200)
        .json({ Message: "Courses Fetched Successfully", courses: courses });
    else
      return res
        .status(500)
        .json({ Error: "Something went wrong try again later!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error!" });
  }
};

export const createCourse = async (req, res) => {
  try {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res
        .status(400)
        .json({ Error: "Bad Request or Invalid Input", Erros: result.errors });
    }

    const { title, description, price } = req.body;

    const isExist = await Courses.findOne({ title });
    if (isExist)
      return res.status(409).json({ Error: "Course Already Exists" });

    const course = await Courses.create({
      title,
      description,
      price,
      mentor: req.user._id,
    });

    if (course)
      return res
        .status(201)
        .json({ Message: "Course Created Successfully", course: course });
    else
      return res
        .status(500)
        .json({ Error: "Something went wrong try again later!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error!" });
  }
};

export const enrollCourse = async (req, res) => {
  try {
    const id = req.params.id;

    if (!req.user) return res.status(404).json({ Error: "SignIn again!" });

    const isExist = await Courses.findOne({ _id: id });
    if (!isExist)
      return res.status(404).json({ Error: "Courses Doesn't Exists" });

    const course = await Courses.findByIdAndUpdate(
      { _id: id },
      {
        $addToSet: { studentsEnrolled: req.user._id },
      },
      {
        new: true,
      }
    );

    if (course)
      return res.status(200).json({
        Message: "Course Enrolled Successfully",
        course: course,
      });
    else
      return res
        .status(500)
        .json({ Message: "Something went wrong try again later!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Message: "Internal Server Error!" });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const id = req.params.id;

    if (!req.user) return res.status(404).json({ Error: "SignIn again!" });

    const isExist = await Courses.findOne({ _id: id });
    if (!isExist)
      return res.status(404).json({ Error: "Courses Doesn't Exists" });

    if (!(isExist.mentor.toString() == req.user._id.toString()))
      return res
        .status(403)
        .json({ Error: "Not Allowed To Update Other Courses!" });

    const { title, description, price } = req.body;

    const course = await Courses.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        price,
      },
      {
        new: true,
      }
    );

    if (course)
      return res.status(200).json({
        Message: "Course Updated Successfully",
        course: course,
      });
    else
      return res
        .status(500)
        .json({ Message: "Something went wrong try again later!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Message: "Internal Server Error!" });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const id = req.params.id;

    if (!req.user) return res.status(404).json({ Error: "SignIn again!" });

    const isExist = await Courses.findOne({ _id: id });
    if (!isExist)
      return res.status(404).json({ Error: "Courses Doesn't Exists" });

    if (!(isExist.mentor.toString() == req.user._id.toString()))
      return res
        .status(403)
        .json({ Error: "Not Allowed To Delete Other Courses!" });

    const course = await Courses.findByIdAndDelete({ _id: id });

    if (course)
      return res.status(200).json({
        Message: "Course Deleted Successfully",
        course: course,
      });
    else
      return res
        .status(500)
        .json({ Message: "Something went wrong try again later!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Message: "Internal Server Error!" });
  }
};
