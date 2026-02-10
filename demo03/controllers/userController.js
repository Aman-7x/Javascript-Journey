import { User } from "../models/userModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ Error: "Invalid Input" });

    const isExist = await User.findOne({ email });
    if (isExist) return res.status(401).json({ Error: "User Already Exist!" });

    const hashed = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      email,
      password: hashed,
    });

    if (user)
      return res
        .status(201)
        .json({ Message: "User Created Sussessfully!", user: user });
    else return res.status(500).json({ Error: "Internal Server Error" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!password || !email)
      return res.status(400).json({ Error: "Invalid Input" });

    const isExist = await User.findOne({ email });
    if (!isExist) return res.status(404).json({ Error: "User Not Found!" });

    const correctPassword = await bcrypt.compare(password, isExist.password);

    if (isExist && correctPassword) {
      const token = jwt.sign(
        {
          user: {
            _id: isExist._id,
            email: isExist.email,
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
            Message: "User Logged In Successfully!",
            user: isExist,
            token: token,
          });
      else return res.status(500).json({ Error: "Internal Server Error" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};


export const allUser = async (req, res) => {
  try {
    
    const users = await User.find();
    
      if (users)
        return res
          .status(200)
          .json({
            Message: "Users Data Fetch Successfully!",
            users: users
          });
      else return res.status(500).json({ Error: "Internal Server Error" });
    
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};
