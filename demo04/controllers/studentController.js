import { validationResult } from "express-validator";
import { Students } from "../models/studentModels.js";

export const registerStudent = async (req, res) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res
        .status(400)
        .json({ Error: "Bad Request", "Error Message": result.errors });
    }

    const { name, email, department } = req.body;

    const isExist = await Students.findOne({ email });
    if (isExist)
      return res.status(400).josn({ error: "Student Already Exist" });

    const student = await Students.create({
      name,
      email,
      department,
    });

    if (student)
      res
        .status(201)
        .json({ Message: "Student Registerd Successfully!", Student: student });
    else
      res.status(500).json({ error: "Something Went Wrong, Try Again Later!" });
  } catch (err) {
    console.log("Error in register Student: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res
        .status(400)
        .json({ Error: "Bad Request", "Error Message": result.errors });
    }

    const { name, email, department } = req.body;
    const { id } = req.params;

    const isExist = await Students.findOne({ _id: id });
    if (!isExist) return res.status(404).josn({ error: "Course not found!" });

    const student = await Students.findByIdAndUpdate(
      { _id: id },
      {
        name,
        email,
        department,
      },
      {
        new: true,
      }
    );

    if (student)
      res
        .status(200)
        .json({ Message: "Student Updated Successfully!", Student: student });
    else
      res.status(500).json({ error: "Something Went Wrong, Try Again Later!" });
  } catch (err) {
    console.log("Error in Update Student: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const isExist = await Students.findOne({ _id: id });
    if (!isExist) return res.status(404).josn({ error: "Course not found!" });

    const student = await Students.findByIdAndDelete({ _id: id });

    if (student)
      res
        .status(200)
        .json({ Message: "Student Delete Successfully!", Student: student });
    else
      res.status(500).json({ error: "Something Went Wrong, Try Again Later!" });
  } catch (err) {
    console.log("Error in Student Course: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetchStudents = async (req, res) => {
  try {
    const students = await Students.find();

    if (students)
      res
        .status(200)
        .json({ Message: "Student Fetched Successfully!", Student: students });
    else
      res.status(500).json({ error: "Something Went Wrong, Try Again Later!" });
  } catch (err) {
    console.log("Error in Fetched Students: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
