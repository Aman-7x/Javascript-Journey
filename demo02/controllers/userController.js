import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

//SignUp route
export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ Error: "Invalid Input" });

    const isExists = await User.findOne({ email: email });

    if (isExists)
      return res.status(401).json({ Error: "User Already Exists!!" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user)
      return res.status(201).json({ Message: "User is Created ", user: user });
    else return res.status(500).json({ Error: "Internal Server Error" });
  } catch (err) {
    console.log("Error : ", err);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

//SignIn route
export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ Error: "Invalid Input" });

    const user = await User.findOne({ email: email });

    // if(!user)
    //         return res.status(404).json({"Error":"User Not Found"});

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        {
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
          },
        },
        process.env.SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );

      return res
        .status(200)
        .json({ Message: "SignIn Successfully", user: user, token: token });
    } else return res.status(401).json({ Error: "Invalid User or Password" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};
