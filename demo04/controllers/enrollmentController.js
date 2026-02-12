import { validationResult } from "express-validator";
import { Enrollment } from "../models/enrollmentModel.js";
import { Students } from "../models/studentModels.js";
import { Courses } from "../models/courseModel.js";

export const enrollStudent = async (req, res) => {
  try {
    const result = validationResult(req);
    console.log(result);

    if (!result.isEmpty()) {
      return res
        .status(400)
        .json({ Message: "Bad Request", Error: result.errors });
    }
    const { student, course, semester } = req.body;

    const validStudent = await Students.findOne({ _id: student });
    const validCourse = await Courses.findOne({ _id: course });

    if (!validCourse)
      return res.status(404).json({ Error: "Course Not Found!" });

    if (!validStudent)
      return res.status(404).json({ Error: "Student Not Found!" });

    const isExist = await Enrollment.findOne({ student, course });
    if (isExist)
      return res
        .status(400)
        .json({ Error: "Student Already Enrolled in this Course!" });

    const enrollStudent = await Enrollment.create({
      student,
      course,
      semester,
    });

    return res.status(200).json({
      message: "Student Enrolled Successfully",
      enrollStudent,
    });
  } catch (err) {
    console.log("Error :", err);
    res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const deleteEnroll = async (req, res) => {
  try {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res
        .status(400)
        .json({ Message: "Bad Request", Error: result.errors });
    }
    const { student, course } = req.body;

    const isExist = await Enrollment.findOne({
      student,
      course,
    });
    if (!isExist)
      return res.status(404).json({ Error: "Enrollment Not Found!" });

    const enrollStudent = await Enrollment.findOneAndDelete({
      student,
      course,
    });

    return res.status(200).json({
      message: "Student Enrolled Deleted Successfully",
      enrollStudent,
    });
  } catch (err) {
    console.log("Error :", err);
    res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const updateEnroll = async (req, res) => {
  try {
    const { studentId, courseId, semester } = req.body;
    const { id } = req.params;

    const isExist = await Enrollment.findOne({ _id: id });
    if (!isExist)
      return res.status(404).json({ Error: "Enrollment Not Found!" });

    const enrollStudent = await Enrollment.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        student: studentId,
        course: courseId,
        semester,
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      message: "Student Enrolled Updated Successfully",
      enrollStudent,
    });
  } catch (err) {
    console.log("Error :", err);
    res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const getStudentCourses = async (req, res) => {
  try {
    const { id } = req.params;

    const enrollStudentCourses = await Enrollment.find({
      student: id,
    }).populate("course");

    if (!enrollStudentCourses)
      return res
        .status(404)
        .json({ Message: "Student Is Not Enrolled In Any Course" });

    return res.status(200).json({
      message: "Student Enrolled Courses",
      enrollStudentCourses,
    });
  } catch (err) {
    console.log("Error :", err);
    res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const getCourseStudents = async (req, res) => {
  try {
    const { id } = req.params;

    const enrollCourseStudents = await Enrollment.find({ course: id }).populate(
      "student"
    );

    if (!enrollCourseStudents)
      return res
        .status(404)
        .json({ Message: "No Student Found with this This Course" });

    return res.status(200).json({
      message: "Student Enrolled Courses",
      enrollCourseStudents,
    });
  } catch (err) {
    console.log("Error :", err);
    res.status(500).json({ Error: "Internal Server Error" });
  }
};
