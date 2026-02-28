import { validationResult } from "express-validator";
import { Users } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res
        .status(400)
        .json({ Error: "Bad Request or Invalid Input", Erros: result.errors });
    }

    const { name, email, password, role } = req.body;

    const isExist = await Users.findOne({ email });
    if (isExist) return res.status(409).json({ Error: "User Already Exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await Users.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    if (user)
      return res
        .status(201)
        .json({ Message: "User SignUp Successfully", user: user });
    else
      return res
        .status(500)
        .json({ Error: "Something went wrong try again later!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error!" });
  }
};

export const signIn = async (req, res) => {
  try {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res
        .status(400)
        .json({ Error: "Bad Request or Invalid Input", Erros: result.errors });
    }

    const { email, password } = req.body;

    const isExist = await Users.findOne({ email });
    if (!isExist) return res.status(404).json({ Error: "User Doesn't Exists" });

    if (isExist && (await bcrypt.compare(password, isExist.password))) {
      const token = jwt.sign(
        {
          user: {
            _id: isExist._id,
            email: isExist.email,
            role: isExist.role,
          },
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );

      if (token)
        return res
          .status(200)
          .json({
            Message: "User Sign Up Successfully",
            name: isExist.name,
            token: token,
          });
      else
        return res
          .status(500)
          .json({ Message: "Something went wrong try again later!" });
    } else {
      return res.status(401).json({ Error: "UserID or Password Incorrect!" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Message: "Internal Server Error!" });
  }
};
